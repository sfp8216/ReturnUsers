import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';

const routes: Routes = [{ path: 'basic-info', component: BasicInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersInfoRoutingModule {}
