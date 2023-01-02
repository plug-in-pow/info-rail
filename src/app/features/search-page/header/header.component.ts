import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map, Observable, retry, startWith, switchMap } from 'rxjs';
import { DataServiceService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Info Rail';
  noResultMessage: string = 'Oops, No Results Found!';
  showDropdown: boolean = false;
  showFilter: boolean = false;
  fromStation: string = '';
  toStation: string = '';
  selectedSortingItem: string = 'Train No.';
  showNoResultMessage: boolean = false;
  searchResult: any[] = [];
  searchTerm: FormControl = new FormControl('');
  @Output() setSortByEvent = new EventEmitter<number>();

  constructor(private dataService:DataServiceService, private router:Router) { 
    this.searchTerm.valueChanges
    .pipe(
      debounceTime(200),
      filter(val => val !== ''),
      map(val => val.trim()),
      distinctUntilChanged(),
      switchMap(val => 
        this.dataService.getMatchingTrainList(val).pipe(
          retry(1),
          startWith([])
        )
      )
    ).subscribe((res: any) => {
      if(res.length === 0){
        this.showNoResultMessage = true;
      }else{
        this.showNoResultMessage = false;
      }
      this.searchResult = res;
    })
  }

  ngOnInit(): void {}

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

  getDetails(train_no: string){
    this.router.navigate(['details',Number(train_no)])
  }

  clearSearchField() {
    this.searchTerm.setValue('');
    this.showNoResultMessage = false;
    this.searchResult = [];
  }

}
