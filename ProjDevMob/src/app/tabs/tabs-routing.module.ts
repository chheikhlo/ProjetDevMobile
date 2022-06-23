import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Salles',
        canActivate: [AuthGuard],
        loadChildren: () => import('../Salles/Salles.module').then(m => m.SallesPageModule)
      },
      {
        path: 'GestionEmploye',
        loadChildren: () => import('../GestionEmploye/GestionEmploye.module').then(m => m.GestionEmployePageModule)
      },
      {
        path: 'auth/login',
        loadChildren: () => import('../auth/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'mon-qrcode',
        loadChildren: () => import('../auth/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'scan-qrcode',
        loadChildren: () => import('../Salles/reunion/scan-qrcode/scan-qrcode.module').then(m => m.ScanQrcodePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/auth/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
