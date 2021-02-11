import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCellAdminPageRoutingModule } from './my-cell-admin-routing.module';

import { MyCellAdminPage } from './my-cell-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCellAdminPageRoutingModule
  ],
  declarations: [MyCellAdminPage]
})
export class MyCellAdminPageModule {}
