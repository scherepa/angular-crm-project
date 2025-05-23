import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // HttpClient - enables to send API requests, it is Observable and we may Subscribe to it
  constructor(private http: HttpClient) { }

  doApiGet(_url: string): any {
    // returns observable to subscribe to
    return this.http.get(_url);
  }
}
