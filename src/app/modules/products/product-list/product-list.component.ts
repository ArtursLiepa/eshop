import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Segment } from '../../../Interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  productselected: boolean = false;
  segmentName: any;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productService = new ProductsService();
  }

  changeSelectedState() {
    this.productselected = true;
  }

  private getSegmentProducts() {
    this.activatedRoute.paramMap.subscribe((id) => {
      this.segmentName = id.get('segment');
      this.products$ = this.productService.getProducts(this.segmentName);
    });
  }

  ngOnInit(): void {
    this.getSegmentProducts();
  }
}
