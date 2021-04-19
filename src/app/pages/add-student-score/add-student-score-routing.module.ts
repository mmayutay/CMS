import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudentScorePage } from './add-student-score.page';

const routes: Routes = [
  {
    path: '',
    component: AddStudentScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStudentScorePageRoutingModule {}
