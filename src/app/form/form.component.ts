import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { DataDetailService } from '../data-detail.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

public length:number;
public db_data;
public new_details;
public new_category;
public key_value;
public values;
public object={"AV":'',"About":'',"BN":'',"FG":'',"IBUS":'',"SRM":'',"cat_id":'',"company":'',"company_id":'',"established":'',"features":'',"image":'',"website":''}

  constructor(private SignupService:SignupService, private data_obj:DataDetailService) {
  }


  reactiveForm = new FormGroup({
    AV: new FormControl('', Validators.required),
    about:new FormControl('abc',Validators.required),
    BN: new FormControl('abc',Validators.required),
    FG: new FormControl('', Validators.required),
    IBUS: new FormControl('', Validators.required),
    SRM:new FormControl('', Validators.required),
    cat_id: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    company_id:new FormControl(''),
    established:new FormControl('2000',Validators.required),
    features: new FormControl('', Validators.required),
    image:new FormControl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYCLRKfnjfA81AO0Bo3hBeeyDBRXHM_lC7ebmvo6APIoEEElU8w'),
    website:new FormControl('abc',Validators.required),   
  });

  ngOnInit() {
    this.data_obj.getData().subscribe((data)=>{
      this.db_data=data;
      this.key_value=Object.keys(this.db_data);
      this.values=Object.values(this.db_data);
      this.new_category = this.values[0];
      this.new_details = this.values[1];

      console.log("length of new details",this.new_details.length);
      this.length=this.new_details.length;
      console.log("length",this.length);
    
  });

  }

  get f() {
    return this.reactiveForm.controls;
  }

  onSubmit() {

    if(this.reactiveForm.value.cat_id === 'Classic English-Style Pale Ale')
    {
      this.reactiveForm.value.cat_id= 1;
    }
    else if(this.reactiveForm.value.cat_id === 'Ordinary Bitter')
    {
      this.reactiveForm.value.cat_id= 2;
    }
    else if(this.reactiveForm.value.cat_id === 'Scotch Ale')
    {
      this.reactiveForm.value.cat_id= 3;
    }

    this.reactiveForm.value.company_id=this.length + 1;

    this.object["AV"]=this.reactiveForm.value.AV;
    this.object["BN"]=this.reactiveForm.value.BN;
    this.object["FG"]=this.reactiveForm.value.FG;
    this.object["IBUS"]=this.reactiveForm.value.IBUS;
    this.object["SRM"]=this.reactiveForm.value.SRM;
    this.object["About"]=this.reactiveForm.value.about;
    this.object["cat_id"]=this.reactiveForm.value.cat_id;
    this.object["company"]=this.reactiveForm.value.company;
    this.object["company_id"]=this.reactiveForm.value.company_id;
    this.object["established"]=this.reactiveForm.value.established;
    this.object["features"]=this.reactiveForm.value.features;
    this.object["image"]=this.reactiveForm.value.image;
    this.object["website"]=this.reactiveForm.value.website;
    this.db_data['company_details'].push(this.object);

    //console.log(this.db_data);
    alert("Submitted")

    this.SignupService.addPost(this.db_data)
    .subscribe(
      response => console.log('Success',response),
      error => console.log('Error',error)
    );
    console.log(this.reactiveForm.value);
  }
}


