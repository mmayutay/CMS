import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateClassOrTrainingsPageRoutingModule } from './update-class-or-trainings-routing.module';

import { UpdateClassOrTrainingsPage } from './update-class-or-trainings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateClassOrTrainingsPageRoutingModule
  ],
  declarations: [UpdateClassOrTrainingsPage]
})
export class UpdateClassOrTrainingsPageModule {}
