import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateComponent } from './components/create/create.component';
import { DisplayComponent } from './components/display/display.component';
import { ManageComponent } from './components/manage/manage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    CreateComponent,
    DisplayComponent,
    ManageComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  exports: [CreateComponent, DisplayComponent, ManageComponent],
})
export class UsersModule {}
