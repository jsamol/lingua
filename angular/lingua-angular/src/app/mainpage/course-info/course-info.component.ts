import { Component, OnInit } from '@angular/core';
import {MainpageService} from "../mainpage.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-course-info',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ],
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
