import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs';
import { DataServiceService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  trainData: any = [];
  currentPageNo: number = 0;
  pagination_limit: number = 20;
  orderBy: string = 'train_no';

  constructor(private router:Router, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getCurrentPageList(this.currentPageNo, this.pagination_limit, this.orderBy)
      .pipe(throttleTime(1000))
      .subscribe(value => { this.trainData = value });
  }

  getDetails(id: number) {
    this.router.navigate(['details',id]);
  }

}
