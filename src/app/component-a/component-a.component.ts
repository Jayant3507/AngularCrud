import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  angsA = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.gettest();
  }

  gettest(){
      this.http.get('https://reqres.in/api/users?page=2').subscribe(dt=>{
      this.angsA = dt['data'];
    })
  }
}
