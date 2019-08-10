import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { map } from "rxjs/operators";
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private _http: HttpClient) { }

  showTodayDate() { 
    let ndate = new Date(); 
    return ndate; 
  }  

  // HttpClient API get() method => Fetch employees list
  getUser(){
    
    //return this._http.get('http://localhost:4200/assets/json/user.json');
    
    // return this._http.get<User>('http://localhost:4200/assets/json/user.json')
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )

    //.map((res: Response) => res.json().response.map((user: User) => new User().deserialize(user)));


    return this._http.get('http://localhost:4200/assets/json/user.json').pipe(
      map(data => {
        let res;
        res = data;
        return res.response.map(user => new User().deserialize(user))
      }),
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
