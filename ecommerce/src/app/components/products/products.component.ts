import { Observable } from 'rxjs';
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
  productsList$!: Observable<IProduct[]>;
  setproductsList!: IProduct[];
  modaMasculina: string = "men's clothing";
  modaFeminina: string = "women's clothing";
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // this.productsList$ = this.productsService.getAll();
     this.getAllProducts();
  }

  addCart(product: IProduct) {
    this.cartService.addCart(product);
  }

  getSearch(event: string){
    const produtosFilter = this.setproductsList.filter((product: IProduct) => {
      return !product.title.indexOf(event);
    })
    this.productsList = produtosFilter;
  }

  getProductsByCategory(category: string){
    this.productsService.getProductByCategory(category).subscribe((res) => {
      this.productsList = res;
      this.setproductsList = res;
      this.setQuantityProduct();
    });
  }

  getAllProducts(){
    this.productsService.getAll().subscribe((res) => {
      this.productsList = res;
      this.setproductsList = res;
       this.setQuantityProduct();
    });
  }

  setQuantityProduct(){
    this.productsList.forEach((product: IProduct) => {
      Object.assign(product, { quantity: 1, total: product.price });
    });
  }
}
