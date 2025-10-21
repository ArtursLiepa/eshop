import { Component, OnInit } from '@angular/core';
import { Category } from '../../../Interfaces/products';
import { PromotionService } from '../promotion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promotion',
  standalone: false,
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.css',
})
export class PromotionComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(private promotionservice: PromotionService) {
    this.promotionservice = new PromotionService();
  }

  getCategories() {
    this.categories$ = this.promotionservice.getProductCategoryNames();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
