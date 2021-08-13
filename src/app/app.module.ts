import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from "./app.component";
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule],
  bootstrap: [
    AppComponent,
     UsersComponent,
     HeaderComponent
  ]})
export class AppModule {}
