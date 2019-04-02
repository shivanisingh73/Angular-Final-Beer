import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { DataDetailService } from '../data-detail.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  public new_details;
  public new_category;
  public key_value;
  public values;
  public db_data;
  public like_db;
  public like_values;
  public email;
  public array: number[];
  public like_keys;
  public id_values: number[];
  public remove_id;
  public remove_key;
  private index;
  private db_key;
  constructor(private signup_obj: SignupService, private data_obj: DataDetailService, private http:HttpClient) {

  }

  ngOnInit() {
    this.data_obj.getData().subscribe((data) => {
      this.db_data = data;
      this.key_value = Object.keys(this.db_data);
      this.values = Object.values(this.db_data);
      this.new_category = this.values[0];
      this.new_details = this.values[1];
      console.log("new detials",this.new_details);
    });
    
    this.signup_obj.get_like().subscribe((data) => {
      this.like_db = data;

      console.log("like_db",this.like_db);
      this.like_values = Object.values(this.like_db);
      console.log(this.like_values);
      this.like_keys = Object.keys(this.like_db);
      console.log(this.like_values, "here");

      this.email = localStorage.getItem('token_value');

      const l = this.like_values.filter(a => a.email == this.email);
      console.log(l);
      this.array = l.map((ele) => {
        return ele.id;
      });
      console.log(this.array);
    });
  }
  onClick(event) {
    
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.remove_id = idAttr.nodeValue;
    // this.like_db.forEach((key) => {
    //   if(key.email==this.email && key.id==this.remove_id){
    //     console.log(key);
    //   }
    // });
    for(var i=0; i<this.like_values.length; i++){
      if(this.like_values[i].email==this.email && this.like_values[i].id==this.remove_id){
        this.index=i;
      }
    }
    this.db_key=this.like_keys[this.index];
    this.http.delete('https://like-6ae3a.firebaseio.com/'+this.db_key+'/.json').subscribe()

  }

}
