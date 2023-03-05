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

  trainSchedule: any[] = [
    {
      "arrival": "10:40:00",
      "day": 1,
      "train_name": "Jammu Tawi Udhampur Special",
      "station_name": "JAMMU TAWI",
      "station_code": "JAT",
      "id": 225347,
      "train_number": "04601",
      "departure": "10:40:00"
    },
    {
      "arrival": "10:55:00",
      "day": 1,
      "train_name": "Jammu Tawi Udhampur Special",
      "station_name": "BAJALTA",
      "station_code": "BLA",
      "id": 225348,
      "train_number": "04601",
      "departure": "10:55:00"
    },
    {
      "arrival": "11:02:00",
      "day": 1,
      "train_name": "Jammu Tawi Udhampur Special",
      "station_name": "SANGAR",
      "station_code": "SGRR",
      "id": 225349,
      "train_number": "04601",
      "departure": "11:02:00"
    },
    {
      "arrival": "11:11:00",
      "day": 1,
      "train_name": "Jammu Tawi Udhampur Special",
      "station_name": "MANWAL",
      "station_code": "MNWL",
      "id": 225350,
      "train_number": "04601",
      "departure": "11:11:00"
    },
    {
      "arrival": "11:42:00",
      "day": 1,
      "train_name": "Jammu Tawi Udhampur Special",
      "station_name": "RAM NAGAR J K",
      "station_code": "RMJK",
      "id": 225351,
      "train_number": "04601",
      "departure": "11:43:00"
    },
    {
      "arrival": "12:15:00",
      "day": 1,
      "train_name": "Jammu Tawi Udhampur Special",
      "station_name": "UDHAMPUR",
      "station_code": "UHP",
      "id": 225352,
      "train_number": "04601",
      "departure": "12:15:00"
    },
  ]
  trainId: string = '';
  trainData!: TrainsInfo;
  loadingMessage: string = 'Loading Train Details!'
  isDetailsLoaded: boolean = false;
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
    })
  }

  routeBack(): void {
    this.router.navigate(['search']);
  }

  keepOriginalOrder(): number {
    return 0;
  }

}
