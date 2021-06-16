import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {  
  serverName;
  showServerName = false;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onAdd(){

    alert("serverName : " + this.serverName);
    this.showServerName = true;

  }
}
