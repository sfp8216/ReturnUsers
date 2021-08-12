import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from "./app.component";
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './component/shared/header/header.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent, UsersComponent,HeaderComponent]
})
export class AppModule {}
