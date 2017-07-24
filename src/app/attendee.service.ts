import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Attendee } from './attendee.model';
import { Homework } from './homework.model';

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
