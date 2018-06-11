import {connect} from 'react-redux';

import CourseInfoHeader from "../../../components/mainpage/courseinfo/CourseInfoHeader";

const mapStateToProps = state => {
    return ({
        user: state.user,
    });
};

const mapDispatchToProps = dispatch => {
    return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseInfoHeader);