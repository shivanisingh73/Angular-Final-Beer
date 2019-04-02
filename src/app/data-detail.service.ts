import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataDetailService {
  private url = 'https://beer-1d21a.firebaseio.com/.json';

  public db: any;
  
  getData(): Observable<any> {
    return this.http.get(this.url);
  }
  constructor(private http: HttpClient) {

  }


}
