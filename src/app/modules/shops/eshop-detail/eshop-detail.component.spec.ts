import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopDetailComponent } from './eshop-detail.component';

describe('EshopDetailComponent', () => {
  let component: EshopDetailComponent;
  let fixture: ComponentFixture<EshopDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EshopDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EshopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
