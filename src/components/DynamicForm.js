import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

const createField = (field, config) => (
    <div key={field.name}>
        <label>{ config.label }</label>
        <input type={config.type} {...field} placeholder={config.placeholder} />
    </div>
);

class DynamicForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { fields, fieldsConfig, handleSubmit, submitting } = this.props;
        const formFields = Object.keys(fields).map( fieldName => createField(fields[fieldName], fieldsConfig[fieldName]) );
        const submitButtonLabel = submitting ? 'Please Wait...' : 'Submit';
        return (
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting}>
                    { formFields }
                    <button type="submit">{ submitButtonLabel }</button>
                </fieldset>
            </form>
        );
    }
}
DynamicForm.propTypes = {
    fields: PropTypes.object.isRequired,
    fieldsConfig: PropTypes.object.isRequired
};

export default reduxForm({
    form: 'dynamic-form'
})(DynamicForm);
