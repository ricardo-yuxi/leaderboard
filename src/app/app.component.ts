import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AttendeeService } from './attendee.service';
import { Attendee } from './attendee.model';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Leaderboard';
  rows: Attendee[] = [];
  temp: Attendee[] = [];

  columns = [
    { prop: 'name' },
    { prop: 'photo' },
    { prop: 'average_grade' },
    { prop: 'delivered_homeworks' },
    { prop: 'missing_homeworks' },
    { prop: 'updated_at' }
  ];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private attendeeService: AttendeeService) {}

  ngOnInit() {
    this.getAttendees();
  }

  getAttendees() {
    this.attendeeService.getAttendees()
      .subscribe(rows => {
        // cache out list
        this.temp = [...rows];
        // push our inital complete list
        this.rows = rows;

        this.averageGrade();
      });
  }

  averageGrade() {
    this.attendeeService.calculateAverageGrade(this.rows);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}