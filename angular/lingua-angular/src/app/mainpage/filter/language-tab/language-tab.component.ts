import {Component, Input, OnInit} from '@angular/core';
import {Language} from "../../../../data/language";

@Component({
  selector: 'app-language-tab',
  templateUrl: './language-tab.component.html',
  styleUrls: ['./language-tab.component.css']
})
export class LanguageTabComponent implements OnInit {
  @Input() languages: Language[];
  selectedLanguages: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggleSelectedLanguage(languageId: number) {
    if (this.selectedLanguages.includes(languageId)) {
      const arrayId = this.selectedLanguages.indexOf(languageId);
      this.selectedLanguages.splice(arrayId, 1);
    } else {
      this.selectedLanguages.push(languageId);
    }
  }
}
