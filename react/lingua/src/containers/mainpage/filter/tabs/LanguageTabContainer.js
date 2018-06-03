import {connect} from 'react-redux';

import LanguageTab from "../../../../components/mainpage/filter/tabs/LanguageTab";
import {toggleLanguageFilter} from "../../../../actions/LanguagesActions";

const mapStateToProps = state => {
    return ({
        languages: state.languages,
        filterLanguages: state.filterLanguages
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        toggleLanguageFilter: id => {
            dispatch(toggleLanguageFilter(id))
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageTab);