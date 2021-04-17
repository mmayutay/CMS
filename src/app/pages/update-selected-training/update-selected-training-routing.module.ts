import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSelectedTrainingPage } from './update-selected-training.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSelectedTrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSelectedTrainingPageRoutingModule {}
