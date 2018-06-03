import { connect } from 'react-redux';

import App from '../components/App';
import { fetchUserData } from '../utils/ApiService';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return ({
        setUser: id => {
            dispatch(fetchUserData(id));
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);