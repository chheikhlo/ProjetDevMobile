import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SallesPage } from './Salles.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SallesRoutingModule } from './Salles-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SallesRoutingModule
  ],
  declarations: [SallesPage]
})
export class SallesPageModule {}
