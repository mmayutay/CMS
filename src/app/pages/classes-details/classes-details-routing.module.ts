import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesDetailsPage } from './classes-details.page';

const routes: Routes = [
  {
    path: '',
    component: ClassesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassesDetailsPageRoutingModule {}
