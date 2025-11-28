import { Component, OnInit } from '@angular/core';
import { Segment } from '../../../Interfaces/products';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-segment',
  standalone: false,
  templateUrl: './product-segment.component.html',
  styleUrl: './product-segment.component.css',
})
export class ProductSegmentComponent implements OnInit {
  segments$: Observable<Segment[]>;
  categoryname: string;
  addItemenabled: boolean = false;

  constructor(
    private segmentService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.segmentService = new ProductsService();
  }

  addItem() {
    this.addItemenabled = true;
    console.log('Add product enabled');
  }

  disableToEdit() {
    this.addItemenabled = false;
  }

  private getsegmentList() {
    this.activatedRoute.paramMap.subscribe((id) => {
      this.categoryname = id.get('category');
      this.segments$ = this.segmentService.getSegmentList(this.categoryname);
    });
  }

  ngOnInit(): void {
    this.getsegmentList();
  }
}
