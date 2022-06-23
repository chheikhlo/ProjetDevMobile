import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterMembrePageRoutingModule } from './ajouter-membre-routing.module';

import { AjouterMembrePage } from './ajouter-membre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterMembrePageRoutingModule
  ],
  declarations: [AjouterMembrePage]
})
export class AjouterMembrePageModule {}
