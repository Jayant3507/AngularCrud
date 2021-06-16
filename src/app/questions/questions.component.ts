import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { QservService } from '../qserv.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit, AfterViewInit {
  questions: [];
  p: number = 1;
  selectedQ: number;
  @ViewChild('ch') ch:ElementRef;
  id: any;

  constructor(private http: HttpClient,
     private spinner: NgxSpinnerService, 
     private qq: QservService,
     private _route: ActivatedRoute
     ) { }

  ngOnInit() {  
    this._route.params.subscribe(
      (params:Params)=>{
        this.id = params["id"];
      });
      
    this.getQuestions();
  }
  
  ngAfterViewInit(){
    console.log(this.ch);
    this.ch.nativeElement.style.backgroundColor="Orange";
  }
  
  getQuestions() {
      debugger
      this.spinner.show();
      this.qq.getQ().subscribe(dt => {
      this.questions = dt['items'];
      console.log(this.questions);
      this.spinner.hide();
    },
      (error: any)=>{
        console.log(error);
      });
  }

  
}
