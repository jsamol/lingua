import { Injectable } from '@angular/core';
import {Course} from "../../data/course";
import {AdvancedFilter} from "../../data/advancedfilter";

@Injectable({
  providedIn: 'root'
})
export class MainpageService {
  private activeCourse: Course;
  private selectedLanguages: number[] = [];
  private advancedFilter: AdvancedFilter = {
    keywords: "",
    minPrice: "-1",
    maxPrice: "-1",
    freeOnly: false
  };

  constructor() { }

  getActiveCourse(): Course {
    return this.activeCourse;
  }

  setActiveCourse(course: Course) {
    this.activeCourse = course;
  }

  toggleSelectedLanguage(languageId: number) {
    if (this.selectedLanguages.includes(languageId)) {
      this.removeSelectedLanguage(languageId);
    } else {
      this.addSelectedLanguage(languageId);
    }
  }

  isLanguageSelected(languageId: number): boolean {
    return this.selectedLanguages.includes(languageId);
  }

  shouldCourseBeDisplayed(course: Course): boolean {
    return (this.selectedLanguages.length === 0
      || this.isLanguageSelected(course.languageId))
      && this.checkAdvancedFilter(course);
  }

  setAdvancedFilter(keywords: string, minPrice: string, maxPrice: string, freeOnly: boolean) {
    this.advancedFilter.keywords = keywords;
    this.advancedFilter.minPrice = minPrice;
    this.advancedFilter.maxPrice = maxPrice;
    this.advancedFilter.freeOnly = freeOnly;
  }

  getAdvancedFilter(): AdvancedFilter {
    return this.advancedFilter;
  }

  private removeSelectedLanguage(languageId: number) {
    const arrayId = this.selectedLanguages.indexOf(languageId);
    this.selectedLanguages.splice(arrayId, 1);
  }

  private addSelectedLanguage(languageId: number) {
    this.selectedLanguages.push(languageId);
    if (this.activeCourse.languageId !== languageId) {
      this.activeCourse = null;
    }
  }

  private checkAdvancedFilter(course: Course): boolean {
    if (this.advancedFilter) {
      return this.checkKeywords(course)
        && (course.isOpen || this.checkMinAndMaxPrice(course))
        && (course.isOpen || this.checkFreeOnly(course.isFree));
    }

    return true;
  }

  private checkKeywords(course: Course): boolean {
    if (!this.advancedFilter.keywords || this.advancedFilter.keywords.length === 0) {
      return true;
    }

    const keywordsSplit = this.advancedFilter.keywords.toLowerCase()
                                                      .replace(",", " ")
                                                      .replace(":", " ")
                                                      .replace(";", " ")
                                                      .replace(/\s+/g, " ")
                                                      .split(" ");

    let containsKeywords = true;

    keywordsSplit.forEach(keyword => {
      containsKeywords = containsKeywords
        && (course.name.toLowerCase().includes(keyword)
          || course.shortDescription.toLowerCase().includes(keyword)
          || course.description.toLowerCase().includes(keyword));
    });

    return containsKeywords;
  }

  private checkMinAndMaxPrice(course: Course): boolean {
    const minPriceNum = parseFloat(this.advancedFilter.minPrice);
    const maxPriceNum = parseFloat(this.advancedFilter.maxPrice);

    const coursePrice = course.isFree ? "0" : course.price;
    const coursePriceNum = parseFloat(coursePrice);

    if (minPriceNum > -1 && maxPriceNum > -1) {
      return minPriceNum <= coursePriceNum && coursePriceNum <= maxPriceNum;
    } else if (minPriceNum > -1) {
      return minPriceNum <= coursePriceNum;
    } else if (maxPriceNum > -1) {
      return coursePriceNum <= maxPriceNum;
    }

    return true;
  }

  private checkFreeOnly(isCourseFree: boolean): boolean {
    if (this.advancedFilter.freeOnly) {
      return isCourseFree;
    }

    return true;
  }
}
