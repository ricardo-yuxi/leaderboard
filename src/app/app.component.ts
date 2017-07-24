import { Observable } from 'rxjs/Observable';
import { AttendeeService } from './attendee.service';
import { Component, OnInit } from '@angular/core';
import { Attendee } from './attendee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Leaderboard';
  attendees: Attendee[] = [];

  constructor(private attendeeService: AttendeeService) {}

  ngOnInit() {
    this.getAttendees();
  }

  getAttendees() {
    this.attendeeService.getAttendees()
      .subscribe(attendees => {
        this.attendees = attendees;
        this.averageGrade();
      });
  }

  averageGrade() {
    this.attendeeService.calculateAverageGrade(this.attendees);
  }
}