import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterMembrePage } from './ajouter-membre.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterMembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterMembrePageRoutingModule {}
