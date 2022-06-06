import { IProduct } from './../shared/models/IProduct';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product: any){
    this.carItemList.push(...product);
    this.productList.next(product);
  }

  addCart(product: any){
    this.carItemList.push(product);
    this.productList.next(this.carItemList);
    this.getTotalPrice();
    console.log(this.carItemList);
  }
  getTotalPrice(): number{
    let total = 0;
    this.carItemList.map((a: any) => {
      total += a.total;
    })
    return total;
  }

  removeCartItem(product: any){
    this.carItemList.map((a:any, index:any) =>{
      if(product.id === a.id){
        this.carItemList.splice(index,1);
      }
    })
  }
  removeAllCart(){
    this.carItemList = [];
    this.productList.next(this.carItemList);
  }
}
