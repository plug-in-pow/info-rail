import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  routeBack(): void {
    this.router.navigate(['search']);
  }

}
