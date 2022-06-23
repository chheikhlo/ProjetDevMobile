import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InReunionPageRoutingModule } from './in-reunion-routing.module';

import { InReunionPage } from './in-reunion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InReunionPageRoutingModule
  ],
  declarations: [InReunionPage]
})
export class InReunionPageModule {}
