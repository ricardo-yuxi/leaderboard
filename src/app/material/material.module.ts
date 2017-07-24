import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdCardModule,
  MdButtonModule,
  MdCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule
  ],
  exports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  declarations: []
})
export class MaterialModule { }
