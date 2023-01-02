import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: []
})
export class SearchPageComponent implements OnInit {
  sortByValueId: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getSortByValue(value: number){
    this.sortByValueId = value
  }

}
