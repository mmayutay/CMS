import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxiliaryPageRoutingModule } from './auxiliary-routing.module';

import { AuxiliaryPage } from './auxiliary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxiliaryPageRoutingModule
  ],
  declarations: [AuxiliaryPage]
})
export class AuxiliaryPageModule {}
