import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSegmentComponent } from './product-segment.component';

describe('ProductSegmentComponent', () => {
  let component: ProductSegmentComponent;
  let fixture: ComponentFixture<ProductSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductSegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
