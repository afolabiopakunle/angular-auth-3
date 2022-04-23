import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventModel} from "./event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getEvents() {
      return this.http.get<EventModel[]>(this.baseUrl + 'events')
  }

  getPrivateEvents() {
    return this.http.get<EventModel[]>(this.baseUrl + 'private-events')
  }

}
