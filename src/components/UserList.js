import React, { Component, PropTypes } from 'react';

class UserList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { usersOrder, usersDetails, onUserClick } = this.props;
        const getUser = (userId) => (
            <li key={userId}>
                <a href="#" onClick={
                    (e) => {
                        e.preventDefault();
                        onUserClick(userId);
                    }
                }>
                    { `${usersDetails[userId].fullName} <${usersDetails[userId].email}>` }
                </a>
            </li>
        );
        const users = usersOrder.map( getUser );
        return (
            <div>
                <ul>
                    { users }
                </ul>
            </div>
        );
    }
}

UserList.propTypes = {
    usersOrder: PropTypes.arrayOf(PropTypes.number).isRequired,
    usersDetails: PropTypes.object.isRequired,
    onUserClick: PropTypes.func.isRequired
};

export default UserList;
