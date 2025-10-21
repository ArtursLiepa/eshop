import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../Interfaces/shop';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shops-list',
  standalone: false,
  templateUrl: './shops-list.component.html',
  styleUrl: './shops-list.component.css',
})
export class ShopsListComponent implements OnInit {
  shopselected: boolean = false;
  veikalselected: boolean = false;

  shops$: Observable<Shop[]>;
  shopType: String;

  constructor(
    private shopListservice: ShopService,
    private activatedRoute: ActivatedRoute
  ) {
    this.shopListservice = new ShopService();
  }

  changeSelectedState() {
    this.shopselected = true;
  }

  getShopList() {
    this.activatedRoute.paramMap.subscribe((name) => {
      this.shopType = name.get('typeName');
      if (this.shopType == 'veikals') {
        this.veikalselected = true;
      } else this.veikalselected = false;
      this.shops$ = this.shopListservice.shopList(this.shopType);
    });
  }

  ngOnInit(): void {
    this.getShopList();
  }
}
