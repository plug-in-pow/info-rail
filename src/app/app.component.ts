import { Component, OnInit } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'info-rail';

  ngOnInit() {
    JsBarcode('#barcode', '12345', {
      height: 50,
      width: 2.3,
      text: '04601'
    });
  }
}
