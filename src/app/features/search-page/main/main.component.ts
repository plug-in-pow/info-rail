import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tempData: number[] = [1,2,3,4,5,6,7,8]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getDetails(id: number) {
    this.router.navigate(['details']);
  }

}
