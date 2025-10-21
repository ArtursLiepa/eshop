import { Component, OnInit } from '@angular/core';
import { Shop, Type } from '../../../Interfaces/shop';
import { ShopService } from '../shop.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shops',
  standalone: false,
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css',
})
export class ShopsComponent implements OnInit {
  shopsTypes$: Observable<Type[]>;

  constructor(private shopService: ShopService) {
    this.shopService = new ShopService();
  }

  getShopTypes() {
    this.shopsTypes$ = this.shopService.getshopTypes();
  }

  ngOnInit(): void {
    this.getShopTypes();
  }
}
