import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from '@angular/common';

import { Attendee } from 'app/attendee.model';
import { AttendeeService } from 'app/attendee.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-attendee-detail',
  templateUrl: './attendee-detail.component.html',
  styleUrls: ['./attendee-detail.component.css']
})
export class AttendeeDetailComponent implements OnInit {
  @Input() attendee: Attendee;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private attendeeService: AttendeeService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.attendeeService.getAttendee(+params.get('id')))
      .subscribe(attendee => this.attendee = attendee)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.attendeeService.update(this.attendee)
      .subscribe(() => this.goBack());
  }

  }
