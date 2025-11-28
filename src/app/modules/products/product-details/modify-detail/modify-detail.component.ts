import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product, Category, Segment } from '../../../../Interfaces/products';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-detail',
  standalone: false,
  templateUrl: './modify-detail.component.html',
  styleUrl: './modify-detail.component.css',
})
export class ModifyDetailComponent implements OnInit {
  @Input() id: number | undefined;
  @Input() update: boolean;
  @Output() disableEditing = new EventEmitter();
  @Output() productcreated = new EventEmitter<Product>();
  product$: Observable<Product> | undefined;
  newproduct: Product | undefined;
  categories$: Observable<Category[]> | undefined;
  segments$: Observable<Segment[]> | undefined;
  enableModifyComponent: boolean = false;
  defaultID: number = 0;
  selectedCategory: string | undefined;
  selectedSegment: string | undefined;

  constructor(private service: ProductsService) {
    this.service = new ProductsService();
  }

  // imageUrl = 'src/assets/images/check.png';

  productForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
    productName: new FormControl('', { nonNullable: true }),
    productPrice: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
    }),
    categoryID: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
    }),
    categoryName: new FormControl('', { nonNullable: true }),
    segmentID: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
    }),
    segmentName: new FormControl('', { nonNullable: true }),
  });

  get newid() {
    return this.productForm.controls.id;
  }
  get newName() {
    return this.productForm.controls.productName;
  }
  get categoryid() {
    return this.productForm.controls.categoryID;
  }
  get categoryname() {
    return this.productForm.controls.categoryName;
  }
  get segmentid() {
    return this.productForm.controls.segmentID;
  }
  get segmentname() {
    return this.productForm.controls.segmentName;
  }
  get newPrice() {
    return this.productForm.controls.productPrice;
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event;
  }
  onSegmentChange(event: any) {
    this.selectedSegment = event;
  }

  getproduct() {
    if (this.id) {
      this.product$ = this.service.getProduct(this.id);
    } else this.product$ = this.service.getProduct(this.defaultID);
  }

  // creatproduct(newProductName: string, newProductPrice: number) {
  //   this.service
  //     .addProduct(
  //       newProductName,
  //       newProductPrice,
  //       this.selectedCategory,
  //       this.selectedSegment
  //     )
  //     .subscribe((item) => (this.newproduct = item));
  //   this.productcreated.emit(this.newproduct);
  // }

  creatproduct() {
    this.service
      .addProduct(
        Number(this.newid.value),
        this.newName.value,
        Number(this.newPrice.value),
        Number(this.categoryid.value),
        this.categoryname.value,
        Number(this.segmentid.value),
        this.segmentname.value
      )
      .subscribe((item) => (this.newproduct = item));
    this.productcreated.emit(this.newproduct);
    this.productForm.reset();
    this.disableEditing.emit();
  }

  getCategories() {
    this.categories$ = this.service.getCategoryList();
  }
  getSegments() {
    this.segments$ = this.service.getSegments();
  }
  cancelPressed() {
    this.disableEditing.emit();
  }
  updateData(id: number) {}

  ngOnInit(): void {
    this.getproduct();
    this.getCategories();
    this.getSegments();
  }
}
