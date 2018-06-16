import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../data/course";

@Component({
  selector: 'app-course-info-header',
  templateUrl: './course-info-header.component.html',
  styleUrls: ['./course-info-header.component.css']
})
export class CourseInfoHeaderComponent implements OnInit {
  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

  getPrice() {
    return this.course.isFree ? 'FREE' : '$' + this.course.price;
  }

  getButtonText() {
    return this.course.isOpen ? 'Continue' : 'Start';
  }
}
