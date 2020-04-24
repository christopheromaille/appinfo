import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpainPage } from './spain.page';

const routes: Routes = [
  {
    path: '',
    component: SpainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpainPageRoutingModule {}
