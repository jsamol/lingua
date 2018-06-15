import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Course } from "../../../data/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() openCourses: Course[];
  @Input() newCourses: Course[];

  constructor() { }

  ngOnInit() {
  }

  checkIfOpenCourses(): boolean {
    return this.openCourses.length > 0;
  }

  checkIfNewCourses(): boolean {
    return this.newCourses.length > 0;
  }

}
