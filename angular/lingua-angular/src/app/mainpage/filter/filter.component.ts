import {Component, Input, OnInit} from '@angular/core';
import {Language} from "../../../data/language";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  readonly LANGUAGE_TAB = "languages";
  readonly ADVANCED_TAB = "advanced";

  @Input() languages: Language[];
  selectedTab = this.LANGUAGE_TAB;

  constructor() { }

  ngOnInit() {
  }

  setSelectedTab(selectedTab: string) {
    this.selectedTab = selectedTab;
  }

}
