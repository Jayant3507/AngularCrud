import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  url = 'https://uxproducts-67664.firebaseio.com/productsNew.json';
  urNew = "https://addposts-394bc.firebaseio.com/posts.json"
  // productsUrl = 'http://18.117.124.73:8081/products'
  constructor(private http: HttpClient) { }

getProducts(){
   return this.http.get(environment.apiUrl +'/products');  
}

fetchById(id){
  return this.http.get(environment.apiUrl +'/products/'+id);  
}

save(data){
  console.log(data)
  return this.http.post(environment.apiUrl +'/products',data).pipe(map(dt=>{
    console.log(dt);
    return dt;
  }));  
}

update(id,data){
  return this.http.put(environment.apiUrl +'/products/'+id,data);  
}


delete(id){
  return this.http.delete(environment.apiUrl +'/products/'+id);  
}


  saveProducts(products: any[]){
    return this.http.post(this.urNew, products);
  }



















}
