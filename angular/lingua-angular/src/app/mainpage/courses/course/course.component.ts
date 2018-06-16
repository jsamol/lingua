import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../data/course";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Input() showPrice = false;

  constructor() { }

  ngOnInit() {
  }

  getPrice(): string {
    return this.course.isFree ? "FREE" : "$" + this.course.price;
  }

}
