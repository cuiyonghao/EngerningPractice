import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./login.component";
import {MngComponent} from "./mng.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MngComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
