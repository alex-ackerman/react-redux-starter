import { connect } from 'react-redux';
import UserDetailsPane from '../components/UserDetailsPane';

const mapStateToProps = (state) => {
    return {
        alias: state.display.alias,
        name: state.display.name,
        email: state.display.email,
        initialized: state.display.initialized
    };
};

export default connect(
    mapStateToProps,
    null
)(UserDetailsPane);
