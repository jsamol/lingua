import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-not-implemented',
  templateUrl: './not-implemented.component.html',
  styleUrls: ['./not-implemented.component.css']
})
export class NotImplementedComponent implements OnInit {
  private readonly TITLE = 'Lingua | Not implemented';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.TITLE);
  }

}
