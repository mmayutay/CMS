import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateClassOrTrainingsPage } from './update-class-or-trainings.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateClassOrTrainingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateClassOrTrainingsPageRoutingModule {}
