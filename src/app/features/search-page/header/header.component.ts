import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showDrilldown: boolean = false;
  showFilter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.showDrilldown = !this.showDrilldown;
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }

}
