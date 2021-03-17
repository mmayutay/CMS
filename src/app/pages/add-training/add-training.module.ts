import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTrainingPageRoutingModule } from './add-training-routing.module';

import { AddTrainingPage } from './add-training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTrainingPageRoutingModule
  ],
  declarations: [AddTrainingPage]
})
export class AddTrainingPageModule {}
