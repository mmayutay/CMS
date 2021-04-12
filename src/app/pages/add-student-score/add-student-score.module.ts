import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStudentScorePageRoutingModule } from './add-student-score-routing.module';

import { AddStudentScorePage } from './add-student-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStudentScorePageRoutingModule
  ],
  declarations: [AddStudentScorePage]
})
export class AddStudentScorePageModule {}
