import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenSegmentComponent } from './garden-segment.component';

describe('GardenSegmentComponent', () => {
  let component: GardenSegmentComponent;
  let fixture: ComponentFixture<GardenSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardenSegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
