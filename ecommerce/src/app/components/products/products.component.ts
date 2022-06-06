import { CartService } from './../../services/cart.service';
import { IProduct } from './../../shared/models/IProduct';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsList!: IProduct[];
  setproductsList!: IProduct[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe((res) => {
      this.productsList = res;
      this.setproductsList = res;
      this.productsList.forEach((product: IProduct) => {
        Object.assign(product, { quantity: 1, total: product.price });
      });
    });
  }

  addCart(product: IProduct) {
    this.cartService.addCart(product);
  }

  getSearch(event: string){
    const produtosFilter = this.setproductsList.filter((p: any) => {
      return !p.title.indexOf(event);
    })
    this.productsList = produtosFilter;
  }
}
