import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakerFilterPage } from './speaker-filter.page';

const routes: Routes = [
  {
    path: '',
    component: SpeakerFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakerFilterPageRoutingModule {}
