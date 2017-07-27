import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeesDatatableComponent } from './attendees-datatable/attendees-datatable.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable/release";
import { AttendeeService } from "app/attendee.service";
import { AttendeeRouting } from './attendee.routing';
import { AttendeeDetailComponent } from './attendee-detail/attendee-detail.component';
import { FormsModule } from "@angular/forms";
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    MaterialModule,
    AttendeeRouting
  ],
  declarations: [
    AttendeesDatatableComponent,
    AttendeeDetailComponent,
    FormComponent
  ],
  providers: [AttendeeService],
  exports: [AttendeesDatatableComponent]
})
export class AttendeeModule { }
