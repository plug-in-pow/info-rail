import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tempData: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  constructor() { }

  ngOnInit(): void {
  }

}