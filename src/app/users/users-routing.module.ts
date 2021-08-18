import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DisplayComponent } from './components/display/display.component';
import { HomeComponent } from './components/home/home.component';
import { ManageComponent } from './components/manage/manage.component';
import { DeleteDialogComponent } from './components/shared/delete-dialog/delete-dialog.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'delete-window', component: DeleteDialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
