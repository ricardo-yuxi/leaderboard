import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AttendeesDatatableComponent } from './attendees-datatable/attendees-datatable.component';
import { AttendeeDetailComponent } from './attendee-detail/attendee-detail.component';
import { FormComponent } from './form/form.component';

const attendeesRoutes: Routes = [
  { path: 'attendees', component: AttendeesDatatableComponent },
  { path: 'new', component: FormComponent },
  { path: 'attendees/:id', component: AttendeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(attendeesRoutes)],
  exports: [RouterModule]
})
export class AttendeeRouting {}
