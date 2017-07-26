import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Attendee } from './attendee.model';
import { Homework } from './homework.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AttendeeService {
  private attendeesUrl = 'api/attendees';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getAttendees(): Observable<Attendee[]> {
    return this.http
      .get(this.attendeesUrl)
      .map(data => data.json().data as Attendee[])
      .do(data => console.log(data));
  }

  getAttendee(id: number): Observable<Attendee> {
    const url = `${this.attendeesUrl}/${id}`;
    return this.http
      .get(url)
      .map(data => data.json().data as Attendee);
  }

  update(attendee: Attendee): Observable<Attendee> {
    const url = `${this.attendeesUrl}/${attendee.id}`;
    let body = JSON.stringify(attendee);
    return this.http
      .put(url, body, {headers: this.headers})
      .map(() => attendee);
  }

  calculateAverageGrade(attendees) {
    attendees.map(attendee => {
      let sum = 0;
      attendee.homeworks.map(homework => {
        let note = homework.note;
        sum += note;
      });
      let average = (sum / attendee.homeworks.length);
      attendee.average_grade = average;
    });
  }

}
