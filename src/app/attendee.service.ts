import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Attendee } from './attendee.model';

@Injectable()
export class AttendeeService {
  private attendeesUrl = 'api/attendees';

  constructor(private http: Http) { }

  getAttendees(): Observable<Attendee[]> {
    return this.http
      .get(this.attendeesUrl)
      .map(data => data.json().data as Attendee[])
      .do(data => console.log(data));
  }

}
