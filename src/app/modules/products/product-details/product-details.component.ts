import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../Interfaces/products';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product;
  name: String;
  private productSub = new Subject<void>();

  constructor(
    private activeRoute: ActivatedRoute,
    private productservice: ProductsService
  ) {
    this.productservice = new ProductsService();
  }

  private getItem() {
    this.activeRoute.paramMap.subscribe((id) => {
      this.name = id.get('name');
      this.productservice
        .getProduct(this.name)
        .pipe(takeUntil(this.productSub))
        .subscribe((data) => (this.product = data));
    });
  }

  ngOnInit(): void {
    this.getItem();
  }

  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }
}
