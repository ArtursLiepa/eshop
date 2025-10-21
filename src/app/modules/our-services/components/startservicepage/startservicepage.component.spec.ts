import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartservicepageComponent } from './startservicepage.component';

describe('StartservicepageComponent', () => {
  let component: StartservicepageComponent;
  let fixture: ComponentFixture<StartservicepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartservicepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartservicepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
