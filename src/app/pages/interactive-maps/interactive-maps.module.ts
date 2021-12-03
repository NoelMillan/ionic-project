import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteractiveMapsPageRoutingModule } from './interactive-maps-routing.module';

import { InteractiveMapsPage } from './interactive-maps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteractiveMapsPageRoutingModule
  ],
  declarations: [InteractiveMapsPage]
})
export class InteractiveMapsPageModule {}
