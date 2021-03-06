import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import './MainPage.css';
import '../shared/styles.css';

import AppContent from '../shared/appcontent/AppContent';
import Filter from './filter/Filter';
import Courses from '../../containers/mainpage/courses/CoursesContainer';
import CourseInfo from '../../containers/mainpage/courseinfo/CourseInfoContainer';

class MainPage extends Component {
    render() {
        return (
            <AppContent>
                <Helmet>
                    <title>Lingua | Main Page</title>
                </Helmet>
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
            </AppContent>
        );
    }
}

export default MainPage;