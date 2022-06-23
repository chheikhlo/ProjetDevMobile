import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonQrcodePageRoutingModule } from './mon-qrcode-routing.module';

import { MonQrcodePage } from './mon-qrcode.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    MonQrcodePageRoutingModule
  ],
  declarations: [MonQrcodePage]
})
export class MonQrcodePageModule {}
