import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  todaysDate: Date;
  value;
    
  categories = [
    { value:'web', viewValue:'web Development'},
    { value:'Android', viewValue:'Android Development'},
    { value:'IOS', viewValue:'IOS Development'}
  ]

  constructor() {
    this.todaysDate = new Date();
   }

   values = [
    {
      id:1,
      name:'Jayant'
    }


]
     ngOnInit() {

  }


  onNoClick(){
    debugger
  }
}
