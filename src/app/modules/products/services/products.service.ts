import { inject, Injectable, Signal } from '@angular/core';
import { Product, Segment, Category } from '../../../Interfaces/products';
import { map, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  newproduct: Product;
  constructor() {}

  private http = inject(HttpClient);

  private categoryUrl = 'http://localhost:3000/Category';
  private segmentUrl = 'http://localhost:3000/Segment';
  private productUrl = 'http://localhost:3000/Products';

  getCategoryList(): Observable<Category[]> {
    // return of(this.categories);
    return this.http.get<Category[]>(this.categoryUrl).pipe(
      map((items) =>
        items.map((item) => {
          return {
            categoryID: item.categoryID,
            categoryName: item.categoryName,
          };
        })
      )
    );
  }

  getSegments(): Observable<Segment[]> {
    return this.http.get<Segment[]>(this.segmentUrl).pipe(
      map((items) =>
        items.map((item) => {
          return {
            segmentID: item.segmentID,
            segmentName: item.segmentName,
          };
        })
      )
    );
  }

  getSegmentList(name: string): Observable<Segment[]> {
    return this.http
      .get<Segment[]>(`${this.segmentUrl}?categoryName=${name}`)
      .pipe(
        map((items) =>
          items.map((item) => {
            return {
              segmentID: item.segmentID,
              segmentName: item.segmentName,
            };
          })
        )
      );
  }

  getProducts(name: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.productUrl}?segmentName=${name}`)
      .pipe(
        map((items) =>
          items.map((item) => {
            return {
              categoryID: item.categoryID,
              categoryName: item.categoryName,
              segmentID: item.segmentID,
              segmentName: item.segmentName,
              id: item.id,
              productName: item.productName,
              productPrice: item.productPrice,
            };
          })
        )
      );
  }

  changePrice(productId, newPrice): void {}

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${id}`).pipe(
      map((item) => {
        return {
          id: item.id,
          productName: item.productName,
          productPrice: item.productPrice,
          categoryID: item.categoryID,
          categoryName: item.categoryName,
          segmentID: item.segmentID,
          segmentName: item.segmentName,
        };
      })
    );
  }

  addProduct(
    newProductID: number,
    newProductName: string,
    newProductPrice: number,
    newProductCategoryID: number,
    newProductCategoryName: string,
    newProductSegmentID: number,
    newProductSegmentName: string
  ): Observable<Product> {
    return this.http
      .post<Product>(this.productUrl, {
        id: newProductID,
        productName: newProductName,
        productPrice: newProductPrice,
        categoryID: newProductCategoryID,
        categoryName: newProductCategoryName,
        segmentID: newProductSegmentID,
        segmentName: newProductSegmentName,
      })
      .pipe(
        map((item) => {
          return {
            id: item.id,
            productName: item.productName,
            productPrice: item.productPrice,
            categoryID: item.categoryID,
            categoryName: item.categoryName,
            segmentID: item.segmentID,
            segmentName: item.segmentName,
          };
        })
      );
  }

  getCheckImage() {}
}
