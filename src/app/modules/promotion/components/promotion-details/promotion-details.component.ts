import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../Interfaces/products';
import { PromotionService } from '../../promotion.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promotion-details',
  standalone: false,
  templateUrl: './promotion-details.component.html',
  styleUrl: './promotion-details.component.css',
})
export class PromotionDetailsComponent implements OnInit {
  product: Product | undefined;
  name: String;
  constructor(
    private service: PromotionService,
    private activeRoute: ActivatedRoute
  ) {
    this.service = new PromotionService();
  }

  getProduct() {
    this.activeRoute.paramMap.subscribe((name) => {
      this.name = name.get('name');
      this.service
        .getProductEntity(this.name)
        .subscribe((data) => (this.product = data));
    });
  }

  ngOnInit(): void {
    this.getProduct();
  }
}
