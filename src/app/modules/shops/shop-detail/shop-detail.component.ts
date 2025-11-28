import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../Interfaces/shop';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop-detail',
  standalone: false,
  templateUrl: './shop-detail.component.html',
  styleUrl: './shop-detail.component.css',
})
export class ShopDetailComponent implements OnInit {
  shop$: Observable<Shop> | undefined;
  shopID: number | undefined;

  constructor(
    private service: ShopService,
    private activatedRoute: ActivatedRoute
  ) {
    this.service = new ShopService();
  }

  private getshop() {
    this.activatedRoute.paramMap.subscribe((id) => {
      this.shopID = Number(id.get('id'));
      this.shop$ = this.service.getShopDetail(this.shopID);
    });
  }

  ngOnInit(): void {
    this.getshop();
  }
}
