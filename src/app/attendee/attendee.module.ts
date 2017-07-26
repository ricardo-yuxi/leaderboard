import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeesDatatableComponent } from './attendees-datatable/attendees-datatable.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable/release";
import { AttendeeService } from "app/attendee.service";

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    MaterialModule
  ],
  declarations: [AttendeesDatatableComponent],
  providers: [AttendeeService],
  exports: [AttendeesDatatableComponent]
})
export class AttendeeModule { }
