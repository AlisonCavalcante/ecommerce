import { CartService } from './../../services/cart.service';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalProductsCart: number = 0;
  @Input() isLoggedIn!: boolean | null;
  @Output() private emmitLogout = new EventEmitter;
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter;
  textSearch: string = '';
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => this.totalProductsCart = res.length)

  }

  logout(){
    this.emmitLogout.emit();
  }

  searchProduct(){
    this.emmitSearch.emit(this.textSearch);
  }
}
