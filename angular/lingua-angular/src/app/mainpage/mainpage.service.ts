import { Injectable } from '@angular/core';
import {Course} from "../../data/course";

@Injectable({
  providedIn: 'root'
})
export class MainpageService {
  private activeCourse: Course;

  constructor() { }

  getActiveCourse(): Course {
    return this.activeCourse;
  }

  setActiveCourse(course: Course) {
    this.activeCourse = course;
  }
}
