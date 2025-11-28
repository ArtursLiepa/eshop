import { inject, Injectable } from '@angular/core';
import { Shop, Type } from '../../Interfaces/shop';
import { Observable, of, map, find } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private url1 = 'http://localhost:3000/shoptypes';
  private url2 = 'http://localhost:3000/veikals';
  private http = inject(HttpClient);

  constructor() {}

  private convertToShop(item: Shop): Shop {
    return {
      Country: item.Country,
      Region: item.Region,
      City: item.City,
      stNumber: item.stNumber,
      Code: item.Code,
      id: item.id,
      Name: item.Name,
    };
  }

  getshopTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.url1).pipe(
      map((items) =>
        items.map((item) => {
          return {
            shopId: item.shopId,
            typeName: item.typeName,
          };
        })
      )
    );
  }

  getShopList(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url2).pipe(
      map((items) =>
        items.map((item) => {
          return this.convertToShop(item);
        })
      )
    );
  }

  getShopDetail(id: number): Observable<Shop> {
    return this.http.get<Shop>(`${this.url2}/${id}`).pipe(
      map((item) => {
        return {
          Name: item.Name,
          id: item.id,
          Country: item.Country,
          Region: item.Region,
          City: item.City,
          Street: item.Street,
          stNumber: item.stNumber,
          Code: item.Code,
        };
      })
    );
  }
}
