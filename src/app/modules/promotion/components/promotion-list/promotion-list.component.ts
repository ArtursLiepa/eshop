import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../../Interfaces/products';
import { PromotionService } from '../../promotion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promotion-list',
  standalone: false,
  templateUrl: './promotion-list.component.html',
  styleUrl: './promotion-list.component.css',
})
export class PromotionListComponent implements OnInit {
  productselected: boolean = false;
  products$: Observable<Product[]>;
  category: String;

  constructor(
    private service: PromotionService,
    private activeRoute: ActivatedRoute
  ) {
    this.service = new PromotionService();
  }

  changeSelectedState() {
    this.productselected = true;
  }

  getProducts() {
    this.activeRoute.paramMap.subscribe((id) => {
      this.category = id.get('category');
      // console.log(`Choosen category is = ${this.category}`);
      this.products$ = this.service.getProductEntities(this.category);

      // this.productservice
      //   .getProduct(this.id)
      //   .pipe(takeUntil(this.productSub))
      //   .subscribe((data) => (this.product = data));
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
