import {connect} from 'react-redux';

import Courses from "../../../components/mainpage/courses/Courses";

const getCourseWithImg = (state, filter) => {
    const languages = state.languages;

    let filteredCourses = state.courses.filter(filter);

    if (state.filterLanguages.length > 0) {
        filteredCourses = filteredCourses.filter(course => {
            if (state.filterLanguages.includes(course.languageId)) {
                return course;
            }
        });
    }

    return filteredCourses.map(course => {
        const courseLanguage = languages.find(language => {
            return language.id === course.languageId;
        });
        course.img = courseLanguage ? courseLanguage.img : "";
        return course;
    })
};

const mapStateToProps = state => {
    return ({
        newCourses: getCourseWithImg(state, course => {
            if (state.user &&
                !state.user.courses.includes(course.id) &&
                state.user.languages.includes(course.languageId)) {
                return course;
            }
        }),
        openCourses: getCourseWithImg(state, course => {
            if (state.user && state.user.courses.includes(course.id)) {
                return course;
            }
        }),
    });
};

const mapDispatchToProps = dispatch => {
    return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);