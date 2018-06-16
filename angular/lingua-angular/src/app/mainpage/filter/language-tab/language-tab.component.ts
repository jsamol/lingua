import {Component, Input, OnInit} from '@angular/core';
import {Language} from "../../../../data/language";
import {MainpageService} from "../../mainpage.service";

@Component({
  selector: 'app-language-tab',
  templateUrl: './language-tab.component.html',
  styleUrls: ['./language-tab.component.css']
})
export class LanguageTabComponent implements OnInit {
  @Input() languages: Language[];

  constructor(private mainpageService: MainpageService) { }

  ngOnInit() {
  }

  toggleSelectedLanguage(languageId: number) {
    this.mainpageService.toggleSelectedLanguage(languageId);
  }

  isSelectedLanguage(languageId: number): boolean {
    return this.mainpageService.isLanguageSelected(languageId);
  }
}
