import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglandPage } from './england.page';

const routes: Routes = [
  {
    path: '',
    component: EnglandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglandPageRoutingModule {}
