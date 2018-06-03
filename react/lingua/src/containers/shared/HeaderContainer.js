import { connect } from 'react-redux';

import Header from '../../components/shared/Header'

const mapStateToProps = state => {
    return ({
        userAvatarSrc: state.user != null ? state.user.img : ""
    });
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);