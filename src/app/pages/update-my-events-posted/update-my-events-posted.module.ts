import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMyEventsPostedPageRoutingModule } from './update-my-events-posted-routing.module';

import { UpdateMyEventsPostedPage } from './update-my-events-posted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMyEventsPostedPageRoutingModule
  ],
  declarations: [UpdateMyEventsPostedPage]
})
export class UpdateMyEventsPostedPageModule {}
