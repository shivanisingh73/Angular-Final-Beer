import { Component, OnInit } from '@angular/core';
import {DataDetailService} from '../app/data-detail.service';
import { MessagingService } from "./messaging.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-fin';
  public keys;
  public values;
  public emp;
  message;
  constructor(private obj:DataDetailService,private messagingService: MessagingService){
    this.obj.getData().subscribe((data)=>{
      this.emp=data;
      this.keys=Object.keys(this.emp);
      this.values=Object.values(this.emp);
  
      //console.log(this.keys);
      //console.log(this.values);
      //console.log(this.emp);
    });
    
  }
  ngOnInit() {
    const userId = '5bx9x4pVVNWbhcHxRiKOulcXPcO2';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage;
 
  }
  

}
