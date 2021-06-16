import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class QservService {
  constructor(private http: HttpClient) {}

  getQ() {
    return this.http.get(
      'https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow'
    );
  }
}
