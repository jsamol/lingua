import React, {Component} from 'react';

import './MainPage.css';
import '../../styles.css';

import Header from '../../containers/shared/HeaderContainer';
import Filter from './filter/Filter';
import Courses from '../../containers/mainpage/courses/CoursesContainer';
import CourseInfo from './courseinfo/CourseInfo';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="main-content">
                    <div className="main-content-col main-content-col-md-2p5">
                        <Filter/>
                    </div>
                    <div className="main-content-col main-content-col-md-6 padding__0">
                        <Courses/>
                    </div>
                    <div className="main-content-col main-content-col-md-3p5">
                        <CourseInfo/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;