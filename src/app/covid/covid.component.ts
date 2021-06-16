import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidServiceService } from '../covid-service.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent implements OnInit {
  districtData = [];
  p: number = 1;
  stringifiedData: any;
  covidData: any;
  totalData: any = [];
  apiData: any;
  confirmed: Number;
  recovered: Number;
  deaths: Number;

  constructor(private http: HttpClient, private covidS: CovidServiceService) {}

  ngOnInit() {
    this.getApi();
    this.getTotalData();
  }

  getTotalData() {
    this.covidS.getData().subscribe((dataC) => {
      this.totalData = dataC;
      console.log(this.totalData);
    });
  }

  getCovid19data() {
    return this.http
      .get('https://api.covidindiatracker.com/state_data.json')
      .subscribe((data: any[]) => {
        this.covidData = data;
        console.log(this.covidData);
        //console.log(data[0]['districtData']);
        // this.stringifiedData = JSON.stringify(data[0]['districtData']);
        // console.log(this.stringifiedData)
      });
  }

  getApi() {
    this.http
      .get('https://api.github.com/users/mojombo/repos')
      .subscribe((dataa) => {
        this.apiData = dataa;
        console.log(this.apiData);
      });
  }
}
