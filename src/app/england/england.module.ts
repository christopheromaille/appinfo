import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglandPageRoutingModule } from './england-routing.module';

import { EnglandPage } from './england.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglandPageRoutingModule
  ],
  declarations: [EnglandPage]
})
export class EnglandPageModule {}
