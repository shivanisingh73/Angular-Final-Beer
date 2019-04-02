import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  email: string;
  password: string;
  
  constructor(private fb: FormBuilder, private SignupService:SignupService,public authService: AuthService){}

  // registrationForm = this.fb.group({
  //   userName:['',Validators.required],
  //   email:['',[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]],
  //   password:['',Validators.required],
  //   confirmPassword:['',Validators.required]   
  // });
  
  // get values(){
  //   return this.registrationForm.controls;
  // }


  ngOnInit(){

}

signup() {
  this.authService.signup(this.email, this.password);
  this.email = this.password = '';
}

  
  // onSubmit()
  // {

  //   this.registrationForm.value.password=window.btoa((this.registrationForm.value.password));
  //   this.registrationForm.value.confirmPassword=window.btoa((this.registrationForm.value.confirmPassword));
  //   console.log( this.registrationForm.value.password)
    
  //   console.log(this.registrationForm.value)
  //   this.SignupService.register(this.registrationForm.value)
  //   .subscribe(
  //     response => console.log('Success',response),
  //     error => console.log('Error',error)
  //   );
  // }


}
