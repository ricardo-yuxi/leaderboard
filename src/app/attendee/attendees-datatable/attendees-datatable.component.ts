import { Component, OnInit, ViewChild } from '@angular/core';
import { Attendee } from "app/attendee.model";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import { AttendeeService } from "app/attendee.service";
import { Router } from "@angular/router";
import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

@Component({
  selector: 'attendees-datatable',
  templateUrl: './attendees-datatable.component.html',
  styleUrls: ['./attendees-datatable.component.css']
})
export class AttendeesDatatableComponent implements OnInit {
  // attendees: Attendee[] = [];
  rows = [];
  rows2 = [];
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
  constructor(
    private router: Router,
    private attendeeService: AttendeeService
  ) { }

  ngOnInit() {
    this.getAttendees();
  }

  getAttendees() {
    this.attendeeService.getAttendees()
      .subscribe(Response => {
        Response.json().data.map((user) => {
          let userUpdated = this.updateValues(user);
          this.rows.push(userUpdated);
          this.rows2.push(userUpdated);
        })
        // cache out list
        // this.temp = [...attendees];
        // push our inital complete list
      });
  }

  updateValues(user) {
    user.average_grade = this.getAverage(
      user.homework1,
      user.homework2,
      user.homework3,
      user.homework4,
      user.homework5);

    user.delivered_homeworks = 3;
    user.missing_homeworks = 4;
    user.updated_at = Date.now();
    // user.color_name = (user.homeworks_missing !== 0) ? 'red' : 'green';

    return user;
  }

  gotoDetail(event) {
    this.router.navigate(['/attendees', event.row.id]);
  }

  delete(value) {
    this.attendeeService.delete(value.id)
      .subscribe(() => {
        this.rows = this.rows.filter(a => a !== value);
      });
  }

  getAverage(h1,h2,h3,h4,h5) {
    // this.attendeeService.calculateAverageGrade(h1,h2,h3,h4,h5,h6);
    return ((Number(h1) + Number(h2) + Number(h3) + Number(h4) + Number(h5)) / 5);

  }

  updateFilter(event) {
    this.temp = []
    const val = event.target.value.toLowerCase();

    // filter our data
    this.temp = this.rows2.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the attendees
    this.rows = this.temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
