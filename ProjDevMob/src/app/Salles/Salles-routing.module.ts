import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SallesPage } from './Salles.page';

const routes: Routes = [
  {
    path: '',
    component: SallesPage,
  },
  {
    path: 'reunion',
    loadChildren: () => import('../Salles/reunion/reunion.module').then( m => m.ReunionPageModule)
  },
  {
    path: 'creer-salle',
    loadChildren: () => import('../Salles/creer-salle/creer-salle.module').then( m => m.CreerSallePageModule)
  },
  {
    path: 'modifier-salle',
    loadChildren: () => import('../Salles/modifier-salle/modifier-salle.module').then( m => m.ModifierSallePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SallesRoutingModule {}
