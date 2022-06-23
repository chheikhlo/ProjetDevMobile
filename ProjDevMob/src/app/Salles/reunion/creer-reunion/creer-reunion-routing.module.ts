import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerReunionPage } from './creer-reunion.page';

const routes: Routes = [
  {
    path: '',
    component: CreerReunionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerReunionPageRoutingModule {}
