import { connect } from 'react-redux';
import LoadingIndicator from '../components/LoadingIndicator';

const mapStateToProps = (state) => {
    return {
        isLoading: state.dataState.isLoading
    };
};

export default connect(
    mapStateToProps
)(LoadingIndicator);
