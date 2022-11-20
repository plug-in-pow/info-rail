import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showDropdown: boolean = false;
  showFilter: boolean = false;
  fromStation: string = '';
  toStation: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
    this.showFilter = false;
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
    this.showDropdown = false;
  }

}
