import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  selectedSortingItem: string = 'Train No.';
  loadSearchResultBlock: boolean = false;
  @Output() setSortByEvent = new EventEmitter<number>();

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

  selectOption(event: Event): void {
    this.selectedSortingItem = (event.target as HTMLOListElement).innerText;
    if(this.selectedSortingItem === 'Train No.'){
      this.setSortByEvent.emit(0);
    }else{
      this.setSortByEvent.emit(1);
    }
  }

  search(event: Event): void {
    
  }

}
