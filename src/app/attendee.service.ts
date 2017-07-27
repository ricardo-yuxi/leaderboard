import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Attendee } from './attendee.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AttendeeService {
  private attendeesUrl = 'api/attendees';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getAttendees() {
    return this.http
      .get(this.attendeesUrl);
  }

  getAttendee(id: number): Observable<Attendee> {
    const url = `${this.attendeesUrl}/${id}`;
    return this.http
      .get(url)
      .map(data => data.json().data as Attendee);
  }

  create(attendee: Array<any>): Observable<Attendee> {
    let body = {};
    return this.http
      .post(this.attendeesUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .map(res => res.json().data as Attendee);
  }

  update(attendee: Attendee): Observable<Attendee> {
    const url = `${this.attendeesUrl}/${attendee.id}`;
    let body = JSON.stringify(attendee);
    return this.http
      .put(url, body, { headers: this.headers })
      .map(() => attendee);
  }

  delete(id: number): Observable<Attendee> {
    const url = `${this.attendeesUrl}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .map(() => null);
  }

}
