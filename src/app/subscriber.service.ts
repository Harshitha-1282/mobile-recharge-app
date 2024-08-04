import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http: HttpClient) { }

  getSubscriber(): any {
    // Call the backend API to get the subscriber details
    return this.http.get('https://example.com/api/subscriber');
  }

}