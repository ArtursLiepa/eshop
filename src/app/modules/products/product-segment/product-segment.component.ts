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
  segmentId: any;

  constructor(
    private segmentService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.segmentService = new ProductsService();
  }

  private getsegmentList() {
    this.activatedRoute.paramMap.subscribe((id) => {
      this.segmentId = id.get('category');
      this.segments$ = this.segmentService.getSegmentList();
    });
  }

  ngOnInit(): void {
    this.getsegmentList();
  }
}
