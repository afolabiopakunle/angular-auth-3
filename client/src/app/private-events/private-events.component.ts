import {Component, OnInit} from '@angular/core';
import {EventService} from "../shared/event.service";
import {EventModel} from "../shared/event.model";

@Component({
  selector: 'app-private-events',
  templateUrl: './private-events.component.html',
  styleUrls: ['./private-events.component.css']
})
export class PrivateEventsComponent implements OnInit {

  privateEvents: Object = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.loadPrivateEvents();
  }

  loadPrivateEvents() {
    this.eventService.getPrivateEvents()
      .subscribe(
        (res) => {
          this.privateEvents = res;
        },
        err => {
          console.log(err)
        }
      )
  }

}
