import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainsInfo } from 'src/app/core/models/trains-data-model';
import { DataServiceService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  trainSchedule: any[] = []
  trainId: string = '';
  trainData!: TrainsInfo;
  loadingMessage: string = 'Loading Train Details!';
  loadingMessageJourney: string = 'Loading Train Journey!';
  isDetailsLoaded: boolean = false;
  isTimetableLoaded: boolean = false;
  coaches: any = {
    "chair car":"0",
    "first class":"0",
    "sleeper":"1",
    "first ac":"0",
    "second ac":"0",
    "third ac":"0"
  };

  constructor(private router:Router, private route:ActivatedRoute, private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.trainId = this.route.snapshot.paramMap.get('id') || '';

    this.dataService.getTrainsData(Number(this.trainId))
    .subscribe((res: TrainsInfo) => {
      this.trainData = res; 
      this.trainData.coaches.split(',').forEach((val: string) => {
        let keyValueArr: string[] = val.split(':');
        this.coaches[keyValueArr[0].replace('_',' ')] = keyValueArr[1];
      });
      this.isDetailsLoaded = true;
    });

    this.dataService.getTrainJourney(Number(this.trainId)).subscribe(res => {
      this.trainSchedule = res;
      this.isTimetableLoaded = true;
    })
  }

  routeBack(): void {
    this.router.navigate(['search']);
  }

  keepOriginalOrder(): number {
    return 0;
  }

}
