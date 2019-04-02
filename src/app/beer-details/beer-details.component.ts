import { Component, OnInit } from '@angular/core';
import { DataDetailService } from '../data-detail.service';


@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  public url;
  public url_list;
  public id;
  public new_details;
  public new_category;
  public key_value;
  public values;
  public db_data;
  constructor(private ser_obj: DataDetailService) {
    this.ser_obj.getData().subscribe((data)=>{
      this.db_data=data;
      this.key_value=Object.keys(this.db_data);
      this.values=Object.values(this.db_data);
      this.new_category = this.values[0];
      this.new_details = this.values[1];
    });
   }

  ngOnInit() {
    this.url=window.location.href;
    this.url_list=this.url.split('beer-details/')
    this.id=this.url_list[1];

  }


}
