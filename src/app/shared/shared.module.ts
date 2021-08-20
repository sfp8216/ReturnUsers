import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ColumnTwoComponent } from './layouts/column-two/column-two.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    ColumnOneComponent,
    HeaderComponent,
    ColumnTwoComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
  ],
  exports: [ColumnOneComponent, SidebarComponent],
})
export class SharedModule {}
