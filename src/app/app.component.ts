import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.router.navigate(['search']);
  }
}
