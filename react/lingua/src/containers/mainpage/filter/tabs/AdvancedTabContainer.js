import {connect} from 'react-redux';

import AdvancedTab from "../../../../components/mainpage/filter/tabs/AdvancedTab";
import {setAdvancedFilter} from "../../../../actions/AdvancedFilterActions";

const mapStateToProps = state => {
    return ({
        advancedFilter: state.advancedFilter
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        setAdvancedFilter: advancedFilter => {
            console.log(advancedFilter);
            dispatch(setAdvancedFilter(advancedFilter));
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedTab);