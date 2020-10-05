import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MultiDragDropComponent } from './multi-drag-drop/multi-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ExcelUploaderComponent } from './excel-uploader/excel-uploader.component';
import { KeyValuePipe, DatePipe } from '@angular/common';
import { CheckDatePipe } from './CheckDatePipe';

@NgModule({
  declarations: [
    AppComponent,
    MultiDragDropComponent,
    ExcelUploaderComponent,
    CheckDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatToolbarModule
  ],
  providers: [KeyValuePipe, CheckDatePipe, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
