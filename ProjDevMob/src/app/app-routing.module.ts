import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'Salles',
    loadChildren: () => import('./Salles/Salles.module').then( m => m.SallesPageModule)
  },
  {
    path: 'GestionEmploye',
    loadChildren: () => import('./GestionEmploye/GestionEmploye.module').then(m => m.GestionEmployePageModule)
  },
  {
    path: 'ajouter-membre',
    loadChildren: () => import('./GestionEmploye/ajouter-membre/ajouter-membre.module').then( m => m.AjouterMembrePageModule)
  },
  {
    path: 'mon-qrcode',
    loadChildren: () => import('./mon-qrcode/mon-qrcode.module').then( m => m.MonQrcodePageModule)
  },
  {
    path: 'creer-reunion',
    loadChildren: () => import('./Salles/reunion/creer-reunion/creer-reunion.module').then( m => m.CreerReunionPageModule)
  },
  {
    path: 'scan-qrcode',
    loadChildren: () => import('./Salles/reunion/scan-qrcode/scan-qrcode.module').then( m => m.ScanQrcodePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
