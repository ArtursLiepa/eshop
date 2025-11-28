import { Injectable } from '@angular/core';
import { Product } from '../../Interfaces/products';
import { Category } from '../../Interfaces/products';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}

  // private categories: Category[] = [
  //   { id: 1, name: 'Dogs' },
  //   { id: 2, name: 'Cats' },
  //   { id: 3, name: 'Rabbits' },
  //   { id: 4, name: 'Turttles' },
  //   { id: 5, name: 'Fish' },
  // ];

  private products: Product[] = [
    {
      categoryID: 1,
      categoryName: 'Dogs',
      segmentID: 1,
      segmentName: 'Feed',
      id: 1,
      productName: 'YorkSheer Adult',
      productPrice: 15,
    },
    {
      categoryID: 1,
      categoryName: 'Dogs',
      segmentID: 1,
      segmentName: 'Feed',
      id: 2,
      productName: 'Hasky Junior',
      productPrice: 65,
    },
    {
      categoryID: 1,
      categoryName: 'Dogs',
      segmentID: 1,
      segmentName: 'Feed',
      id: 3,
      productName: 'Hasky Adult',
      productPrice: 43,
    },
    {
      categoryID: 1,
      categoryName: 'Dogs',
      segmentID: 1,
      segmentName: 'Feed',
      id: 1,
      productName: 'Lion Adult',
      productPrice: 15,
    },
    {
      categoryID: 1,
      categoryName: 'Dogs',
      segmentID: 1,
      segmentName: 'Feed',
      id: 2,
      productName: 'Garfild Junior',
      productPrice: 65,
    },
    {
      categoryID: 2,
      categoryName: 'Cats',
      segmentID: 1,
      segmentName: 'Feed',
      id: 3,
      productName: 'Garfild Adult',
      productPrice: 43,
    },
    {
      categoryID: 3,
      categoryName: 'Rabbits',
      segmentID: 1,
      segmentName: 'Cage',
      id: 5,
      productName: 'North Atlantic specie',
      productPrice: 15,
    },
  ];

  getProductEntities(category: String): Observable<Product[]> {
    return of(this.products).pipe(
      map((items) =>
        items.filter((item) => {
          return item.categoryName == category;
        })
      )
    );
  }

  getProductEntity(name: String): Observable<Product> {
    return of(this.products).pipe(
      map((items) =>
        items.find((item) => {
          return item.productName == name;
        })
      )
    );
  }

  getProductCategoryNames(): Observable<Category[]> {
    return of(this.products).pipe(
      map((items) =>
        items.filter((item) => {
          return item.categoryName;
        })
      )
    );
  }
}
