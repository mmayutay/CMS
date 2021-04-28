import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSelectedTrainingPageRoutingModule } from './update-selected-training-routing.module';

import { UpdateSelectedTrainingPage } from './update-selected-training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSelectedTrainingPageRoutingModule
  ],
  declarations: [UpdateSelectedTrainingPage]
})
export class UpdateSelectedTrainingPageModule {}
