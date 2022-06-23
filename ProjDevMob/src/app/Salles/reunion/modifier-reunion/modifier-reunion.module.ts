import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierReunionPageRoutingModule } from './modifier-reunion-routing.module';

import { ModifierReunionPage } from './modifier-reunion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierReunionPageRoutingModule
  ],
  declarations: [ModifierReunionPage]
})
export class ModifierReunionPageModule {}
