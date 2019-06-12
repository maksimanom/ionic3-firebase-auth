import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrcodescanPage } from './qrcodescan';

@NgModule({
  declarations: [
    QrcodescanPage,
  ],
  imports: [
    IonicPageModule.forChild(QrcodescanPage),
  ],
})
export class QrcodescanPageModule {}
