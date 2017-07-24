import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiService } from './api.service';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    InMemoryWebApiModule.forRoot(ApiService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
