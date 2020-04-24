import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrelandPageRoutingModule } from './ireland-routing.module';

import { IrelandPage } from './ireland.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrelandPageRoutingModule
  ],
  declarations: [IrelandPage]
})
export class IrelandPageModule {}
