import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonQrcodePage } from './mon-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: MonQrcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonQrcodePageRoutingModule {}
