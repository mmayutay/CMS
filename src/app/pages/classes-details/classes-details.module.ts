import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassesDetailsPageRoutingModule } from './classes-details-routing.module';

import { ClassesDetailsPage } from './classes-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassesDetailsPageRoutingModule
  ],
  declarations: [ClassesDetailsPage]
})
export class ClassesDetailsPageModule {}
