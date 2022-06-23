import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEmployePage } from './GestionEmploye.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEmployePage,
  },
  {
    path: 'ajouter-membre',
    loadChildren: () => import('../GestionEmploye/ajouter-membre/ajouter-membre.module').then( m => m.AjouterMembrePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEmployeRoutingModule {}
