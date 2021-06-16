import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})

export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(){
    console.log(this._route.snapshot.params['id']);
    //this.departmentId = id;
  }
  
}
