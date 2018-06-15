import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  readonly LANGUAGE_TAB = "languages";
  readonly ADVANCED_TAB = "advanced";

  selectedTab = this.LANGUAGE_TAB;

  constructor() { }

  ngOnInit() {
  }

  setSelectedTab(selectedTab: string) {
    this.selectedTab = selectedTab;
  }

}
