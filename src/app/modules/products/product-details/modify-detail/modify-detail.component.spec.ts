import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDetailComponent } from './modify-detail.component';

describe('ModifyDetailComponent', () => {
  let component: ModifyDetailComponent;
  let fixture: ComponentFixture<ModifyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
