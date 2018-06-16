import { Component, OnInit } from '@angular/core';
import {MainpageService} from "../mainpage.service";

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {


  constructor(private mainpageService: MainpageService) { }

  ngOnInit() {
  }

  isActiveCourse(): boolean {
    return this.mainpageService.getActiveCourse() !== null
      && this.mainpageService.getActiveCourse() !== undefined;
  }

  getActiveCourse() {
    return this.mainpageService.getActiveCourse();
  }

}
