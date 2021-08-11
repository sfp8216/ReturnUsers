import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from "./app.component";
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent, UsersComponent]
})
export class AppModule {}
