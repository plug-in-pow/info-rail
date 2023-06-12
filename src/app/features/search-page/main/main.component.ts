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
  paginationData = {
    "startIndex" : 1,
    "endIndex": 20,
    "perPageLimit": 20,
    "pageNo": 0,
    "totalMatchRecords": 500
  }

  @Input() currentSortBy: number = 0;

  constructor(private router:Router, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getTrainTotalLength().subscribe(totalRecords => {
      this.paginationData['totalMatchRecords'] = totalRecords;
    })
  }
  
  ngOnChanges(){
    this.getCurrentPageData(this.paginationData.pageNo,this.paginationData.perPageLimit,this.orderByMap[this.currentSortBy])
  }
  
  getCurrentPageData(pageNo: number, limit: number, orderByValue: string){
    this.isLoaded = false;
    this.dataService.getCurrentPageList(pageNo, limit, orderByValue)
      .pipe(throttleTime(1000))
      .subscribe({
        next: (val: TrainsInfoSearchPage[]) => {
          this.trainData = val;
          this.paginationData.endIndex = this.trainData.length < this.paginationData.perPageLimit ? this.paginationData.totalMatchRecords : this.paginationData.endIndex;
        },
        error: (err) => console.error(err),
        complete: () => this.isLoaded = true
      })
  }

  getDetails(id: number) {
    this.router.navigate(['details',id]);
  }

  goLeftPage() {
    this.paginationData.startIndex -= 20;
    this.paginationData.endIndex -= 20;
    this.paginationData.pageNo -= 1;
    this.getCurrentPageData(this.paginationData.pageNo,this.paginationData.perPageLimit,this.orderByMap[this.currentSortBy])
  }

  goRightPage() {
    this.paginationData.startIndex += 20;
    this.paginationData.endIndex += 20;
    this.paginationData.pageNo += 1;
    this.getCurrentPageData(this.paginationData.pageNo,this.paginationData.perPageLimit,this.orderByMap[this.currentSortBy])
  }

  goStart() {
    this.paginationData = {
      ...this.paginationData,
      "startIndex" : 1,
      "endIndex": 20,
      "pageNo": 0
    }
    this.getCurrentPageData(this.paginationData.pageNo,this.paginationData.perPageLimit,this.orderByMap[this.currentSortBy])
  }

  goEnd() {
    const perPageRecord = Math.round(this.paginationData.totalMatchRecords / this.paginationData.perPageLimit);
    this.paginationData = {
      ...this.paginationData,
      "startIndex" : this.paginationData.perPageLimit*perPageRecord+1,
      "endIndex": this.paginationData.totalMatchRecords,
      "pageNo": perPageRecord-1
    }
    this.getCurrentPageData(this.paginationData.pageNo,this.paginationData.perPageLimit,this.orderByMap[this.currentSortBy])
  }

}
