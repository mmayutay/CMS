import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportingsPage } from './reportings.page';

const routes: Routes = [
  {
    path: '',
    component: ReportingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingsPageRoutingModule {}
