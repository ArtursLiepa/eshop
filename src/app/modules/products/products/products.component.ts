import { Component, OnInit } from '@angular/core';
import { Category } from '../../../Interfaces/products';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(private service: ProductsService) {
    this.service = new ProductsService();
  }

  private getCategories() {
    this.categories$ = this.service.getCategoryList();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
