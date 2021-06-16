import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../app-services/common.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private http: HttpClient,private Serv: CommonService) { }
  products:any;
  ngOnInit(): void {
   this.getData()
  }

  getData(){
    this.Serv.getProducts().subscribe(dt =>{
      this.products = dt;
      console.log(dt);
    })
  }

  edit(){

  }

  delete(id){
    if(confirm('Do u want to delete this product?'))
    this.Serv.delete(id).subscribe(dl=>{
       this.getData();
    })
  }




}
