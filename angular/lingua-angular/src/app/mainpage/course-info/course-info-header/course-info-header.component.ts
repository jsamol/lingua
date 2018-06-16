import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../data/course";
import {ApiService} from "../../../api.service";

@Component({
  selector: 'app-course-info-header',
  templateUrl: './course-info-header.component.html',
  styleUrls: ['./course-info-header.component.css']
})
export class CourseInfoHeaderComponent implements OnInit {
  @Input() course: Course;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getPrice(): string {
    return this.course.isFree ? 'FREE' : '$' + this.course.price;
  }

  handleButtonClick() {
    if (!this.course.isOpen) {
      this.apiService.startNewCourse(this.course.id);
    }
  }

  getButtonText(): string {
    return this.course.isOpen ? 'Continue' : 'Start';
  }
}
