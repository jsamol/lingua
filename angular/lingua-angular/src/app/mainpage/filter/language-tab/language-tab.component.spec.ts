import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageTabComponent } from './language-tab.component';

describe('LanguageTabComponent', () => {
  let component: LanguageTabComponent;
  let fixture: ComponentFixture<LanguageTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
