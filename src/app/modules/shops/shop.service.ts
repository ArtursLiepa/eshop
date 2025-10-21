import { Injectable } from '@angular/core';
import { Shop, Type } from '../../Interfaces/shop';
import { Observable, of, map, find } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private shops: Shop[] = [
    {
      shopId: 1,
      typeName: 'veikals',
      id: 1,
      Name: 'Banga',
      Country: 'Latvia',
      Region: 'Talsi',
      City: 'Roja',
      Code: 3162,
    },
    {
      shopId: 1,
      typeName: 'veikals',
      id: 2,
      Name: 'Mērsrags',
      Country: 'Latvia',
      Region: 'Talsi',
      City: 'Mērsrags',
      Code: 3182,
    },
    {
      shopId: 1,
      typeName: 'veikals',
      id: 3,
      Name: 'Valemārpils',
      Country: 'Latvia',
      Region: 'Talsi',
      City: 'Roja',
      Code: 3260,
    },
    {
      shopId: 1,
      typeName: 'e-veikals',
      id: 3,
      Name: 'Valemārpils',
      Country: 'Latvia',
      Region: 'Talsi',
      City: 'Roja',
      Code: 3260,
    },
  ];

  private shopTypes: Type[] = [
    { shopId: 1, typeName: 'e-veikals' },
    { shopId: 2, typeName: 'veikals' },
  ];

  getshopTypes(): Observable<Type[]> {
    return of(this.shopTypes);
  }

  shopList(Type: String): Observable<Shop[]> {
    return of(this.shops).pipe(
      map((items) =>
        items.filter((item) => {
          return item.typeName == Type;
        })
      )
    );
  }

  getShopDetail(name: String): Observable<Shop> {
    return of(this.shops).pipe(
      map((items) =>
        items.find((item) => {
          return item.Name == name;
        })
      )
    );
  }

  constructor() {}
}
