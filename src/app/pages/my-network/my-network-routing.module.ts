import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyNetworkPage } from './my-network.page';

const routes: Routes = [
  {
    path: '',
    component: MyNetworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyNetworkPageRoutingModule {}
