import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMyEventsPostedPage } from './update-my-events-posted.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMyEventsPostedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMyEventsPostedPageRoutingModule {}
