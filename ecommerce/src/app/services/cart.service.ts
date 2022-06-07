import { IProduct } from './../shared/models/IProduct';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public carItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.carItemList.push(...product);
    this.productList.next(product);
  }

  addCart(product: any) {
    let existProduct = this.verficarProduto(product);
    if (!existProduct) {
      this.carItemList.push(product);
      this.productList.next(this.carItemList);
      this.getTotalPrice();
    }
  }

  verficarProduto(product: any): boolean {
    let existProduct: boolean = false;
    this.carItemList.map((itemCart: any) => {
      if (product.id === itemCart.id) {
        itemCart.quantity += 1;
        existProduct = true;
      }
    });
    return existProduct;
  }

  getTotalPrice(): number {
    let total = 0;
    this.carItemList.map((a: any) => {
      total += a.total * a.quantity;
    });
    return total;
  }

  removeCartItem(product: any) {
    this.carItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.carItemList.splice(index, 1);
      }
    });
    this.productList.next(this.carItemList);
  }
  removeAllCart() {
    this.carItemList = [];
    this.productList.next(this.carItemList);
  }
}
