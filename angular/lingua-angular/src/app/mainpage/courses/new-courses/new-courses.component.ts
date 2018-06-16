import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../data/course";

@Component({
  selector: 'app-new-courses',
  templateUrl: './new-courses.component.html',
  styleUrls: ['./new-courses.component.css']
})
export class NewCoursesComponent implements OnInit {
  @Input() courses: Course[];

  constructor() { }

  ngOnInit() {
  }

}
