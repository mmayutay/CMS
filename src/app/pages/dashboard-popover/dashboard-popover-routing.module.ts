import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPopoverPage } from './dashboard-popover.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPopoverPageRoutingModule {}
