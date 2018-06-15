import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTabComponent } from './advanced-tab.component';

describe('AdvancedTabComponent', () => {
  let component: AdvancedTabComponent;
  let fixture: ComponentFixture<AdvancedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
