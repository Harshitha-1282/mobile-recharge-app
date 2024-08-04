import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../subscriber.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {
  subscriber: any;

  constructor(private subscriberService: SubscriberService) { }

  ngOnInit(): void {
    // Call the backend API to get the subscriber details
    this.subscriberService.getSubscriber().subscribe((subscriber: any) => {
      this.subscriber = subscriber;
    });
  }
}
