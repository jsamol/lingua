import React, {Component} from 'react';

import './MainPage.css';
import '../../styles.css';

import Header from '../../containers/shared/HeaderContainer';
import Filter from './filter/Filter';
import Courses from './courses/Courses';
import CourseInfo from './courseinfo/CourseInfo';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="main-content">
                    <div className="main-content-col main-content-col-md-2">
                        <Filter/>
                    </div>
                    <div className="main-content-col main-content-col-md-6">
                        <Courses/>
                    </div>
                    <div className="main-content-col main-content-col-md-4">
                        <CourseInfo/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;