import { AttendeeService } from 'app/attendee.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // @Input() attendee;
  // @Output() addAttendee: EventEmitter<any>;

  constructor(
    private attendeeService: AttendeeService,
    private location: Location
  ) {}

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(...theArgs): void {
    // this.addAttendee.emit(theArgs);
    let arr = theArgs.map(a => a.trim());
    this.attendeeService.create(arr)
      .subscribe(() => this.goBack());
  }
}
