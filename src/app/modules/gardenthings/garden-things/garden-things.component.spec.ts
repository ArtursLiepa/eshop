import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenThingsComponent } from './garden-things.component';

describe('GardenThingsComponent', () => {
  let component: GardenThingsComponent;
  let fixture: ComponentFixture<GardenThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardenThingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
