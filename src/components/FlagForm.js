import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class FlagControl extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onBlur, onChange, options, value } = this.props;

        return (
            <tr>
                <td>
                    {value.flagLabel}
                    <input type="hidden" value={value.GUID} />
                </td>
                <td>
                    <input type="text" value={value.flagValue} onBlur={onBlur} />
                </td>
                <td>
                    <a href="#">Inherit</a>
                </td>
            </tr>
        );
    }
}

class FlagForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { fields, values, handleSubmit, submitting } = this.props;
        const flags = Object.keys(fields).map(fieldName => <FlagControl value={values[fieldName]} />);
        return (
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Flag</th>
                            <th>Value</th>
                            <th>InheritFrom</th>
                        </tr>
                    </thead>
                    <tbody>
                        { flags }
                    </tbody>
                </table>
                <button>Submit</button>
            </form>
        );
    }
}
FlagForm.propTypes = {
    fields: PropTypes.object.isRequired,
    values: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default reduxForm({
    form: 'flagForm'
})(FlagForm);
