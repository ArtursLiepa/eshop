import { Component, OnDestroy, OnInit } from '@angular/core';
import { Shop } from '../../../Interfaces/shop';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-shop-detail',
  standalone: false,
  templateUrl: './shop-detail.component.html',
  styleUrl: './shop-detail.component.css',
})
export class ShopDetailComponent implements OnInit, OnDestroy {
  shop: Shop;
  shopName: String;
  private productSub = new Subject<void>();

  constructor(
    private service: ShopService,
    private activatedRoute: ActivatedRoute
  ) {
    this.service = new ShopService();
  }

  private getshop() {
    this.activatedRoute.paramMap.subscribe((id) => {
      this.shopName = id.get('name');

      this.service
        .getShopDetail(this.shopName)
        .pipe(takeUntil(this.productSub))
        .subscribe((item) => (this.shop = item));
    });
  }

  ngOnInit(): void {
    this.getshop();
  }

  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }
}
