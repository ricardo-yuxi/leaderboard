import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AttendeesDatatableComponent } from './attendees-datatable/attendees-datatable.component';

const attendeesRoutes: Routes = [
  { path: 'attendees', component: AttendeesDatatableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(attendeesRoutes)],
  exports: [RouterModule]
})
export class AttendeeRouting {}
