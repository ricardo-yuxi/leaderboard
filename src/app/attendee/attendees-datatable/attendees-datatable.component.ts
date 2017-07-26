import { Component, OnInit, ViewChild } from '@angular/core';
import { Attendee } from "app/attendee.model";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import { AttendeeService } from "app/attendee.service";
import { Router } from "@angular/router";

@Component({
  selector: 'attendees-datatable',
  templateUrl: './attendees-datatable.component.html',
  styleUrls: ['./attendees-datatable.component.css']
})
export class AttendeesDatatableComponent implements OnInit {
  attendees: Attendee[] = [];
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
  ) {}

  ngOnInit() {
    this.getAttendees();
  }

  gotoDetail(event) {
    console.log(event.row);
    this.router.navigate(['/attendees', event.row.id]);
  }

  getAttendees() {
    this.attendeeService.getAttendees()
      .subscribe(attendees => {
        // cache out list
        this.temp = [...attendees];
        // push our inital complete list
        this.attendees = attendees;
        this.averageGrade();
      });
  }

  averageGrade() {
    this.attendeeService.calculateAverageGrade(this.attendees);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the attendees
    this.attendees = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
