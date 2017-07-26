import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AttendeesDatatableComponent } from './attendee/attendees-datatable/attendees-datatable.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/attendees', pathMatch: 'full' },
  { path: 'attendees', component: AttendeesDatatableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
