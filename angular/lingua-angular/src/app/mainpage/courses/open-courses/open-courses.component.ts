import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../data/course";

@Component({
  selector: 'app-open-courses',
  templateUrl: './open-courses.component.html',
  styleUrls: ['./open-courses.component.css']
})
export class OpenCoursesComponent implements OnInit {
  @Input() courses: Course[];

  constructor() { }

  ngOnInit() {
  }

}
