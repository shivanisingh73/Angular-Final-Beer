import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;


  //public user=[];

  isEyeClose:boolean=true;

  constructor(private fb: FormBuilder, private SignupService:SignupService,private router:Router,public authService: AuthService) { }
  // loginForm = this.fb.group({
  //   email:['',[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]],
  //   password:['',Validators.required]  
  // });
  
  // get values(){
  //   return this.loginForm.controls;
  // }

  ngOnInit() {

    // this.SignupService.getUsers().subscribe((data) => {
    //   Object.keys(data).forEach((key) => {
    //   this.user.push(data[key])
    // });
    // });
    
  }
  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }


  // onSubmit()
  // {
  //   console.log(this.loginForm.value)
  //   this.user.forEach((key) => 
  //   {
  //     if(this.loginForm.value.email === key.email && this.loginForm.value.password === window.atob(key.password))
  //     {
  //       alert("LogIn Successful");
  //        localStorage.setItem('isLoggedIn', "true");
  //        localStorage.setItem('token_value',this.loginForm.value.email)
  //        this.router.navigate(['/cards']);
  //     }

  //   });

  // }



  showPassword(){
    if(this.isEyeClose){
      this.isEyeClose=false;
    }
    else{
      this.isEyeClose=true;
    }
  }

}

