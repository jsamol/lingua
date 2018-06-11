import {connect} from 'react-redux';

import {removeSelectedCourseId, setSelectedCourseId} from "../../../actions/CoursesActions";

import Course from "../../../components/mainpage/courses/Course";

const mapStateToProps = state => {
    return ({
        selectedCourseId: state.selectedCourseId
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        selectCourse: courseId => {
            dispatch(setSelectedCourseId(courseId));
        },
        deselectCourse: () => {
            dispatch(removeSelectedCourseId());
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Course);