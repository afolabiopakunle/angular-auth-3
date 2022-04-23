import { Component, OnInit } from '@angular/core';
import {EventService} from "../shared/event.service";
import {EventModel} from "../shared/event.model";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventModel[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents()
      .subscribe(
        res => {
          this.events = res;
        },
        err => {
          console.log(err)
        }
      )
  }
}
