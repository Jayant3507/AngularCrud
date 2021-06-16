import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})

export class GetbookingService {

  constructor(private http: HttpClient) { }

  // getDataa(){
  //   return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  // }

}
