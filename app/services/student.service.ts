import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Student } from '../interfaces/student';
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url: string
  private _loginurl:string
  private _url1:string
  constructor(private _http: HttpClient) {
    //this._url = "http://test-routes.herokuapp.com/test/uppercase"
    // this._url = "mongodb+srv://admin:<admin>@college.mxvuwtf.mongodb.net/?retryWrites=true&w=majority"
    this._url = "http://localhost:8080/fetch",
    this._loginurl= "http://localhost:8080/insert/login",
    this._url1="http://localhost:8080/insert/student"
    //this._url1="http://localhost:8080/fetch/college1"
    // this._url="https://tame-erin-macaw.cyclic.app/fetch"

  }
 
  public my_method(obj: any): Observable<Student[]> {
    console.log("Object from user:- ", obj)
    return this._http.post<Student[]>(this._url+'/collegeori', obj)
      .pipe(catchError(this.handleError))
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  getRegionList(): Observable<any[]> {
    return this._http.get<any>(this._url)
  }
  
}



