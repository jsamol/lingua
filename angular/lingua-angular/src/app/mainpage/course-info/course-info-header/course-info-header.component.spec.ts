import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoHeaderComponent } from './course-info-header.component';

describe('CourseInfoHeaderComponent', () => {
  let component: CourseInfoHeaderComponent;
  let fixture: ComponentFixture<CourseInfoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInfoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInfoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
