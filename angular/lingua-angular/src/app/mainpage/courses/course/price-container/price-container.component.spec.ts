import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceContainerComponent } from './price-container.component';

describe('PriceContainerComponent', () => {
  let component: PriceContainerComponent;
  let fixture: ComponentFixture<PriceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
