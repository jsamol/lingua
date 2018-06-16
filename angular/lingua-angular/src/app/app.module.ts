import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FilterComponent } from './mainpage/filter/filter.component';
import { CoursesComponent } from './mainpage/courses/courses.component';
import { CourseInfoComponent } from './mainpage/course-info/course-info.component';
import { LanguageTabComponent } from './mainpage/filter/language-tab/language-tab.component';
import { AdvancedTabComponent } from './mainpage/filter/advanced-tab/advanced-tab.component';
import { NewCoursesComponent } from './mainpage/courses/new-courses/new-courses.component';
import { OpenCoursesComponent } from './mainpage/courses/open-courses/open-courses.component';
import { CourseComponent } from './mainpage/courses/course/course.component';
import { CourseInfoHeaderComponent } from './mainpage/course-info/course-info-header/course-info-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    FilterComponent,
    CoursesComponent,
    CourseInfoComponent,
    LanguageTabComponent,
    AdvancedTabComponent,
    NewCoursesComponent,
    OpenCoursesComponent,
    CourseComponent,
    CourseInfoHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
