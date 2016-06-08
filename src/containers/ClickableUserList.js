import { connect } from 'react-redux';
import UserList from '../components/UserList';
import { getUserData } from '../action-creators/userActionCreators';

const mapStateToProps = (state) => {
    return {
        usersData: state.users.users,
        usersOrder: state.users.usersOrder
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserClick: (userId) => {
            dispatch( getUserData(userId) );
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
