import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {User} from "../../data/user";
import {Language} from "../../data/language";
import {Course} from "../../data/course";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  user: User;
  userLanguages: Language[] = [];
  courses: Course[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getUserData()
      .subscribe(user => {
        this.user = user;
        this.apiService.getLanguages()
          .subscribe(languages => {
            this.userLanguages = languages.filter(language => {
              return this.user.languages.includes(language.id);
            });
          });
      });
    this.apiService.getCourses()
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  getNewCourses(): Course[] {
    return this.getFilteredCourses(course => {
      if (this.user) {
        return !this.user.courses.includes(course.id)
          && this.userLanguages
              .map(language => { return language.id })
              .includes(course.languageId);
      }
      return false;
    });
  }

  getOpenCourses(): Course[] {
    return this.getFilteredCourses(course => {
      if (this.user) {
        return this.user.courses.includes(course.id);
      }
      return false;
    }).map(course => {
      course.isOpen = true;
      return course;
    });
  }

  private getFilteredCourses(filter: (Course) => boolean): Course[] {
    return this.courses
      .filter(filter)
      .map(course => {
      const courseLanguage = this.userLanguages.find(language => {
        return language.id === course.languageId;
      });
      if (courseLanguage) {
        course.img = courseLanguage.img;
      }
      return course;
    });
  }
}
