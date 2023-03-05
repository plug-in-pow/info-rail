import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs';
import { TrainsInfoSearchPage } from 'src/app/core/models/trains-data-model';
import { DataServiceService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnChanges {

  trainData: TrainsInfoSearchPage[] = [];
  orderByMap: string[] = ['train_no', 'train_name'];
  isLoaded: boolean = false;
  loadingMessage: string = 'Fetching Data';
  @Input() currentSortBy: number = 0;

  constructor(private router:Router, private dataService: DataServiceService) { }

  ngOnInit(): void {
    
  }
  
  ngOnChanges(){
    this.getCurrentPageData(0,20,this.orderByMap[this.currentSortBy])
  }
  
  getCurrentPageData(pageNo: number, limit: number, orderByValue: string){
    this.isLoaded = false;
    this.dataService.getCurrentPageList(pageNo, limit, orderByValue)
      .pipe(throttleTime(1000))
      .subscribe({
        next: (val: TrainsInfoSearchPage[]) => this.trainData = val,
        error: (err) => console.error(err),
        complete: () => this.isLoaded = true
      })
  }

  getDetails(id: number) {
    this.router.navigate(['details',id]);
  }

}
