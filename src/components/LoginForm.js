import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { fields: { username, password }, handleSubmit, submitting } = this.props;
        const submitButtonLabel = submitting ? 'Please Wait...' : 'Login';
        return (
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting}>
                    <div>
                        <label>Username</label>
                        <input type="text" placeholder="Username" {...username} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" {...password} />
                    </div>
                    <button type="submit">{ submitButtonLabel }</button>
                </fieldset>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login'
})(LoginForm);
