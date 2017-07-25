import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';

import { AttendeeService } from './attendee.service';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ApiService),
    NgxDatatableModule
  ],
  providers: [AttendeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
