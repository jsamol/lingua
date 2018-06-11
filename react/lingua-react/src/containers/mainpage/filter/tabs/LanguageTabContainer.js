import {connect} from 'react-redux';

import LanguageTab from "../../../../components/mainpage/filter/tabs/LanguageTab";
import {toggleLanguageFilter} from "../../../../actions/LanguagesActions";

const mapStateToProps = state => {
    return ({
        languages: state.languages.filter(language => {
            return state.user && state.user.languages.includes(language.id);
        }),
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