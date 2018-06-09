import {connect} from 'react-redux';

import CourseInfo from "../../../components/mainpage/courseinfo/CourseInfo";

const checkIfOpen = (state, courseId) => {
    if (!state.user) {
        return false;
    }

    return state.user.courses.includes(courseId);
};

const getCourseImg = (state, languageId) => {
    const courseLanguage = state.languages.find(language => {
        return language.id === languageId;
    });

    return courseLanguage.img;
};

const getMappedSelectedCourse = state => {
    const selectedCourse = state.courses.find(course => {
        return course.id === state.selectedCourseId;
    });

    if (selectedCourse) {
        selectedCourse.img = getCourseImg(state, selectedCourse.languageId);
        selectedCourse.isOpen = checkIfOpen(state, selectedCourse.id);
    }

    return selectedCourse;
};

const mapStateToProps = state => {
    return ({
        selectedCourse: getMappedSelectedCourse(state)
    });
};

const mapDispatchToProps = dispatch => {
    return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseInfo);