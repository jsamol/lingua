import {connect} from 'react-redux';

import LanguageTab from "../../../../components/mainpage/filter/tabs/LanguageTab";

const mapStateToProps = state => {
    return ({
       languages: state.languages
    });
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageTab);