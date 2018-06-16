import {connect} from 'react-redux';

import App from '../components/App';
import {fetchCourses, fetchLanguages, fetchUserData} from '../utils/ApiService';
import {removeSelectedCourseId} from "../actions/CoursesActions";
import {setAdvancedFilter} from "../actions/AdvancedFilterActions";
import {clearLanguageFilter} from "../actions/LanguagesActions";

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return ({
        setUser: id => {
            dispatch(fetchUserData(id));
        },
        getLanguages: () => {
            dispatch(fetchLanguages());
        },
        getCourses: () => {
            dispatch(fetchCourses());
        },
        resetMainPageState: () => {
            dispatch(removeSelectedCourseId());
            dispatch(clearLanguageFilter());
            dispatch(setAdvancedFilter({}));
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);