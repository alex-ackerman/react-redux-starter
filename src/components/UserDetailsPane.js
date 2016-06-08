import React, { Component, PropTypes } from 'react';

class UserDetailsPane extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { initialized, name, alias, email } = this.props;
        if (!initialized) {
            return null;
        }
        return (
            <div>
                <h2>{name}</h2>
                <h3>{alias}</h3>
                <h3>{email}</h3>
            </div>
        );
    }
}

UserDetailsPane.propTypes = {
    initialized: PropTypes.bool.isRequired,
    name: PropTypes.string,
    alias: PropTypes.string,
    email: PropTypes.string
};

export default UserDetailsPane;
