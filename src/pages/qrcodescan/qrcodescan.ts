import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
/**
 * Generated class for the QrcodescanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcodescan',
  templateUrl: 'qrcodescan.html',
})
export class QrcodescanPage {

  public barcode: string;
  constructor(public barcodescanner: BarcodeScanner) {
  }
  scan() {
    this.barcodescanner.scan().then(barcodeData=> {
      this.barcode = barcodeData['text'];
    }).catch(err=> {
      this.barcode = JSON.stringify(err);});
  }
  }
