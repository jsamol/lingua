import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../data/course";
import {MainpageService} from "../../mainpage.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Input() showPrice = false;

  constructor(private mainpageService: MainpageService) { }

  ngOnInit() {
  }

  getPrice(): string {
    return this.course.isFree ? "FREE" : "$" + this.course.price;
  }

  toggleActiveCourse(course: Course) {
    this.mainpageService.setActiveCourse(this.isActive() ? null : course);
  }

  isActive(): boolean {
    const activeCourse = this.mainpageService.getActiveCourse();
    return activeCourse ? activeCourse.id === this.course.id : false;
  }

}
