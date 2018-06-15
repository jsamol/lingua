import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {User} from "../../data/user";
import {Language} from "../../data/language";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  user: User;
  userLanguages: Language[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getUserData()
      .subscribe(user => {
        this.user = user;
        this.apiService.getLanguages()
          .subscribe(languages => {
            this.userLanguages = languages.filter(language => {
              return this.user.languages.includes(language.id);
            });
          });
      });
  }
}
