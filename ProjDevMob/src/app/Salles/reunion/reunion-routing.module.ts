import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReunionPage } from './reunion.page';

const routes: Routes = [
  {
    path: '',
    component: ReunionPage
  },
  {
    path: 'creer-reunion',
    loadChildren: () => import('../../Salles/reunion/creer-reunion/creer-reunion.module').then( m => m.CreerReunionPageModule)
  },
  {
    path: 'modifier-reunion',
    loadChildren: () => import('../../Salles/reunion/modifier-reunion/modifier-reunion.module').then( m => m.ModifierReunionPageModule)
  },
  {
    path: 'in-reunion',
    loadChildren: () => import('../../Salles/reunion/in-reunion/in-reunion.module').then( m => m.InReunionPageModule)
  },
  {
    path: 'scan-qrcode',
    loadChildren: () => import('../../Salles/reunion/scan-qrcode/scan-qrcode.module').then( m => m.ScanQrcodePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReunionPageRoutingModule {}
