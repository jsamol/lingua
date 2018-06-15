import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userAvatarSrc: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getUserAvatar();
  }

  getUserAvatar() {
    this.apiService.getUserData()
      .subscribe(userData => {
        this.userAvatarSrc = userData.img;
      });
  }

}
