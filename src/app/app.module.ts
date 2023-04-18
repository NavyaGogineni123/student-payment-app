import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentPaymentsComponent } from './student-payments/student-payments.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    StudentPaymentsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
