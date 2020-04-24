import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrelandPage } from './ireland.page';

const routes: Routes = [
  {
    path: '',
    component: IrelandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrelandPageRoutingModule {}
