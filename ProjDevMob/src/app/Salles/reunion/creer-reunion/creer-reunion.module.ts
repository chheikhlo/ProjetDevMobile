import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerReunionPageRoutingModule } from './creer-reunion-routing.module';

import { CreerReunionPage } from './creer-reunion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerReunionPageRoutingModule
  ],
  declarations: [CreerReunionPage]
})
export class CreerReunionPageModule {}
