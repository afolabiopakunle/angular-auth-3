import {Component, OnInit} from '@angular/core';
import {EventService} from "../shared/event.service";

@Component({
  selector: 'app-private-events',
  templateUrl: './private-events.component.html',
  styleUrls: ['./private-events.component.css']
})
export class PrivateEventsComponent implements OnInit {

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.loadPrivateEvents();
  }

  loadPrivateEvents() {
    this.eventService.getPrivateEvents()
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
