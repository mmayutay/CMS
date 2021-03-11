import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayMembersPage } from './display-members.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayMembersPageRoutingModule {}
