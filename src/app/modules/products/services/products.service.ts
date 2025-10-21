import { Injectable } from '@angular/core';
import { Product, Segment, Category } from '../../../Interfaces/products';
import { map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  private categories: Category[] = [
    { categoryID: 1, categoryName: 'Electronics' },
    { categoryID: 2, categoryName: 'Clothes' },
    { categoryID: 3, categoryName: 'Shoes' },
    { categoryID: 4, categoryName: 'Furnite' },
    { categoryID: 5, categoryName: 'Cars' },
  ];

  private segments: Segment[] = [
    { segmentID: 1, segmentName: 'Computers' },
    { segmentID: 2, segmentName: 'Keyboards' },
    { segmentID: 3, segmentName: 'Micropohones' },
    { segmentID: 4, segmentName: 'Mouses' },
    { segmentID: 5, segmentName: 'Powerbanks' },
  ];

  private products: Product[] = [
    {
      categoryID: 1,
      categoryName: 'Electronics',
      segmentID: 1,
      segmentName: 'Computers',
      productID: 1,
      productName: 'Dell HC78',
      productPrice: 720,
    },
    {
      categoryID: 1,
      categoryName: 'Electronics',
      segmentID: 2,
      segmentName: 'Keyboards',
      productID: 1,
      productName: 'Wireless HP HC556',
      productPrice: 120,
    },
    {
      categoryID: 1,
      categoryName: 'Electronics',
      segmentID: 2,
      segmentName: 'Micropohones',
      productID: 1,
      productName: 'JBL 900',
      productPrice: 250,
    },
    {
      categoryID: 1,
      categoryName: 'Electronics',
      segmentID: 2,
      segmentName: 'Micropohones',
      productID: 2,
      productName: 'JBL 800',
      productPrice: 150,
    },
    {
      categoryID: 1,
      categoryName: 'Electronics',
      segmentID: 4,
      segmentName: 'Mouses',
      productID: 1,
      productName: 'HTC 12',
      productPrice: 25,
    },
    {
      categoryID: 1,
      categoryName: 'Electronics',
      segmentID: 5,
      segmentName: 'Powerbanks',
      productID: 1,
      productName: 'Dell',
      productPrice: 48,
    },
  ];

  getSegmentList(): Observable<Segment[]> {
    return of(this.segments);
  }

  getCategoryList(): Observable<Category[]> {
    return of(this.categories);
  }

  getProducts(name: String): Observable<Product[]> {
    return of(this.products).pipe(
      map((items) =>
        items.filter((item) => {
          return item.segmentName == name;
        })
      )
    );
  }

  getProduct(name: String): Observable<Product> {
    return of(this.products).pipe(
      map((items) =>
        items.find((item) => {
          return item.productName == name;
        })
      )
    );
  }
}
