import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../Interfaces/products';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product> | undefined;
  productID: number;
  enableModifyComponent: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private productservice: ProductsService
  ) {
    this.productservice = new ProductsService();
  }

  enableToEdit() {
    this.enableModifyComponent = true;
  }

  disableToEdit() {
    this.enableModifyComponent = false;
  }
  private getItem() {
    this.activeRoute.paramMap.subscribe((id) => {
      this.productID = Number(id.get('id'));
      this.product$ = this.productservice.getProduct(this.productID);
    });
  }

  ngOnInit(): void {
    this.getItem();
  }
}
