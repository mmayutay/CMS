import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportingsPageRoutingModule } from './reportings-routing.module';

import { ReportingsPage } from './reportings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportingsPageRoutingModule
  ],
  declarations: [ReportingsPage]
})
export class ReportingsPageModule {}
