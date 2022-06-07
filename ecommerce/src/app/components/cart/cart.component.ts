import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsLis: any = [];
  total!: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.productsLis = res;
      this.total = this.cartService.getTotalPrice();
    })
  }

  removerProduct(product: any){
    this.cartService.removeCartItem(product)
  }

  removeAllCart(){
    this.cartService.removeAllCart();
  }

  incrementQuantity(product: any){
    product.quantity += 1;
    this.total += product.price;
  }
  decrementQuantity(product: any){
    if(product.quantity > 1){
      product.quantity -= 1;
      this.total -= product.price;
    } else {
      this.cartService.removeCartItem(product)
    }
  }
}
