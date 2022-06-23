import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierReunionPage } from './modifier-reunion.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierReunionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierReunionPageRoutingModule {}
