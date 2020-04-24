import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpainPageRoutingModule } from './spain-routing.module';

import { SpainPage } from './spain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpainPageRoutingModule
  ],
  declarations: [SpainPage]
})
export class SpainPageModule {}
