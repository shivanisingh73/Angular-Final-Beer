import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;


  constructor(private firebaseAuth: AngularFireAuth,private router:Router) {
    this.user=firebaseAuth.authState;
   }

   signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        alert("Sign Up Successful");
        this.router.navigate(['/login_page'])
        console.log('Success!', value);
      })
      .catch(err => {
        alert("Not successful")
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem("token_value",email)
        alert("VALID");
          this.router.navigate(['/cards'])
        console.log('Nice, it worked!');
      })
      .catch(err => {
        alert("INVALID");
        console.log('Something went wrong:',err.message);
        this.router.navigate(['/login_page']);
      });
  }

  logout() {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem("token_value");
    this.firebaseAuth
      .auth
      .signOut();
  }
  

}
