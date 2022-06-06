import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter;
  textSearch: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  search(){
    this.emmitSearch.emit(this.textSearch);
  }

}
