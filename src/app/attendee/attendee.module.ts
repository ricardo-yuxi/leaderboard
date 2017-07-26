import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeesDatatableComponent } from './attendees-datatable/attendees-datatable.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable/release";
import { AttendeeService } from "app/attendee.service";
import { AttendeeRouting } from './attendee.routing';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    MaterialModule,
    AttendeeRouting
  ],
  declarations: [AttendeesDatatableComponent],
  providers: [AttendeeService],
  exports: [AttendeesDatatableComponent]
})
export class AttendeeModule { }
