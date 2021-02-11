import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCellAdminPage } from './my-cell-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MyCellAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCellAdminPageRoutingModule {}
