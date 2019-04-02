import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Users } from './users';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  _url_like='https://like-6ae3a.firebaseio.com/.json'


  _url='https://fir-demo-6294a.firebaseio.com/.json'



  _url_addpost="https://beer-1d21a.firebaseio.com/.json";
  

  test_url="https://newdb-ebc15.firebaseio.com/.json";  


  constructor(private _http: HttpClient) { }

  register(userData)
  {
    return this._http.post<any>(this._url,userData);
  }

  likePost(likeData){
    return this._http.post<any>(this._url_like,likeData);
  }

  get_like():Observable<any>{
    return this._http.get(this._url_like);
  }

  getUsers():Observable<any>
  {
    return this._http.get<Users[]>(this._url);
  }

  addPost(addData)
  {
    return this._http.put<any>(this._url_addpost,addData);
  }

}
