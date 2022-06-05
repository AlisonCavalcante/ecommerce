import { IProduct } from './../../shared/models/IProduct';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList!: IProduct[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe((res)=> {
      this.productsList = res;
      console.log(this.productsList)
    })
  }

}
