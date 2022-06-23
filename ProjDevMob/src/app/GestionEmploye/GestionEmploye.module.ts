import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionEmployePage } from './GestionEmploye.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GestionEmployeRoutingModule } from './GestionEmploye-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: GestionEmployePage }]),
    GestionEmployeRoutingModule,
  ],
  declarations: [GestionEmployePage]
})
export class GestionEmployePageModule {}
