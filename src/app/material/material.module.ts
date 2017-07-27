import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdCardModule,
  MdButtonModule,
  MdIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: []
})
export class MaterialModule { }
