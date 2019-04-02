import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataDetailService } from '../data-detail.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public new_cat;
  public new_company_details;
  public keys;
  public value;
  public values;
  public db_data;
  constructor(private obj: DataDetailService) {
    this.obj.getData().subscribe((data)=>{
      this.db_data=data;
      this.keys=Object.keys(this.db_data);
      this.values=Object.values(this.db_data);
      console.log(this.values)
      this.new_cat = this.values[0];
      console.log("New",this.new_cat);
      this.new_company_details = this.values[1];
    });
   }

  ngOnInit() {    
  }
}
