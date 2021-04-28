import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayMembersPageRoutingModule } from './display-members-routing.module';

import { DisplayMembersPage } from './display-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayMembersPageRoutingModule
  ],
  declarations: [DisplayMembersPage]
})
export class DisplayMembersPageModule {}
