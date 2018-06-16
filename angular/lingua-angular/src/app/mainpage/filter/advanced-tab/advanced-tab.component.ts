import { Component, OnInit } from '@angular/core';
import {MainpageService} from "../../mainpage.service";

@Component({
  selector: 'app-advanced-tab',
  templateUrl: './advanced-tab.component.html',
  styleUrls: ['./advanced-tab.component.css']
})
export class AdvancedTabComponent implements OnInit {

  constructor(private mainpageService: MainpageService) { }

  ngOnInit() {
  }

  handleFilter(keywords: string, minPrice: string, maxPrice: string, freeOnly: boolean) {
    this.mainpageService.setAdvancedFilter(keywords, minPrice, maxPrice, freeOnly);
  }

  getKeywordsValue(): string {
    const advancedFilter = this.mainpageService.getAdvancedFilter();
    return (advancedFilter && advancedFilter.keywords) ? advancedFilter.keywords : ""
  }

  getMinPriceValue(): string {
    const advancedFilter = this.mainpageService.getAdvancedFilter();
    return (advancedFilter && advancedFilter.minPrice && advancedFilter.minPrice !== "-1") ? advancedFilter.minPrice : ""
  }

  getMaxPriceValue(): string {
    const advancedFilter = this.mainpageService.getAdvancedFilter();
    return (advancedFilter && advancedFilter.maxPrice && advancedFilter.maxPrice !== "-1") ? advancedFilter.maxPrice : ""
  }

  getFreeOnlyValue(): boolean {
    const advancedFilter = this.mainpageService.getAdvancedFilter();
    return (advancedFilter && advancedFilter.freeOnly) ? advancedFilter.freeOnly : false;
  }

}
