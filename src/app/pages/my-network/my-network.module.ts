import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyNetworkPageRoutingModule } from './my-network-routing.module';

import { MyNetworkPage } from './my-network.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNetworkPageRoutingModule
  ],
  declarations: [MyNetworkPage]
})
export class MyNetworkPageModule {}
