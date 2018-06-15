import { Component, OnInit } from '@angular/core';
import {Language} from "../../../../data/language";
import {ApiService} from "../../../api.service";

@Component({
  selector: 'app-language-tab',
  templateUrl: './language-tab.component.html',
  styleUrls: ['./language-tab.component.css']
})
export class LanguageTabComponent implements OnInit {
  languages: Language[] = [];
  selectedLanguages: number[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCurrentLanguages();
  }

  getCurrentLanguages() {
    this.apiService.getUserData()
      .subscribe(user => {
        this.apiService.getLanguages()
          .subscribe(languages => {
            this.languages = languages.filter(language => {
              return user.languages.includes(language.id);
            });
          });
      });
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
