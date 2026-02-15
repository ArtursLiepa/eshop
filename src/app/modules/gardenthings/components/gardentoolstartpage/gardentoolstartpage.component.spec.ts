import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardentoolstartpageComponent } from './gardentoolstartpage.component';

describe('GardentoolstartpageComponent', () => {
  let component: GardentoolstartpageComponent;
  let fixture: ComponentFixture<GardentoolstartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardentoolstartpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardentoolstartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
