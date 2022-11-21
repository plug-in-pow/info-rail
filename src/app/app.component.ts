import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as JsBarcode from 'jsbarcode';
import { DataServiceService } from './core/services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'info-rail';
  trainsData: any;

  constructor(private trainDataService: DataServiceService, private router:Router) {}

  ngOnInit() {
    this.router.navigate(['details'])
    // this.trainDataService.getTrainsData().subscribe((data: any) => {
    //   console.log(data['features'].length)
    // })
    
    // JsBarcode('#barcode', '12345', {
    //   height: 50,
    //   width: 2.3,
    //   text: '04601'
    // });
  }
}
