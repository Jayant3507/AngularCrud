import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  datas = [];
  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {  
    this.getDtaa();
  }

  getDtaa(){
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees").
      subscribe(dts => {
      this.datas = dts['datas'];
      console.log(this.datas);
    })
  }

}
