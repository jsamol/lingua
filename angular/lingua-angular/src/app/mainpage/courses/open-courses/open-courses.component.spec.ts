import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCoursesComponent } from './open-courses.component';

describe('OpenCoursesComponent', () => {
  let component: OpenCoursesComponent;
  let fixture: ComponentFixture<OpenCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
