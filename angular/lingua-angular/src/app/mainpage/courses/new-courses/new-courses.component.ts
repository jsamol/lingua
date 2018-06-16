import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../data/course";

@Component({
  selector: 'app-new-courses',
  templateUrl: './new-courses.component.html',
  styleUrls: ['./new-courses.component.css']
})
export class NewCoursesComponent implements OnInit {
  private readonly MORE_BUTTON_TEXT = "More";
  private readonly LESS_BUTTON_TEXT = "Less";

  @Input() courses: Course[];
  moreLessButtonText = this.MORE_BUTTON_TEXT;

  constructor() { }

  ngOnInit() {
  }

  getVisibleCourses(): Course[] {
    return this.courses.slice(0, 3);
  }

  getHiddenCourses(): Course[] {
    return this.courses.slice(3);
  }

  toggleMoreLess() {
    if (this.moreLessButtonText === this.MORE_BUTTON_TEXT) {
      this.moreLessButtonText = this.LESS_BUTTON_TEXT;
    } else {
      this.moreLessButtonText = this.MORE_BUTTON_TEXT;
    }
  }

}
