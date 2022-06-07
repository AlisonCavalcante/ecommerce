import { Constantes } from './../utils/Constantes';
import { IProduct } from './../shared/models/IProduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(Constantes.URL_PRODUCTS).pipe(
      take(1)
    );
  }
  getProductByCategory(category: string): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(Constantes.URL_PRODUCTS_CATEGORYS + `${category}`).pipe(
      take(1)
    );
  }
}
