import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class GetServService {
  constructor(private http: HttpClient) {   }
  
  // dataG(){
  //    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  // }

}




