import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QservService } from '../qserv.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profiles: [];
  questions: [];

  constructor(private http: HttpClient,private spinner: NgxSpinnerService, private qq: QservService,private _route: ActivatedRoute ) { }

  ngOnInit() {
      this.getQuestions();
      this.getProfiles();
  }

  getProfiles(){  
      debugger
      this.spinner.show();
      this.http.get('https://api.stackexchange.com/2.2/users/{ids}?order=desc&sort=reputation&site=stackoverflow').subscribe(dt=>{
      this.profiles = dt['items'];
      console.log(this.profiles);
      this.spinner.hide();
    },(error: any)=>{
      console.log(error)
    });
  }

  getQuestions() {
    this.spinner.show();
    this.qq.getQ().subscribe(dt => {
      this.questions = dt['items'];
      console.log(this.questions);
      this.spinner.hide();
    },(error: any)=>{
      console.log(error);
    });
  }
  
}

