import {connect} from 'react-redux';

import App from '../components/App';
import {fetchCourses, fetchLanguages, fetchUserData} from '../utils/ApiService';

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
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);