import { Component, OnInit } from '@angular/core';
import {EventService} from "../shared/event.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents()
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err)
        }
      )
  }
}
