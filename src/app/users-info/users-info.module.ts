import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersInfoRoutingModule } from './users-info-routing.module';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';


@NgModule({
  declarations: [
    BasicInfoComponent
  ],
  imports: [
    CommonModule,
    UsersInfoRoutingModule
  ]
})
export class UsersInfoModule { }
