import React, { Component, PropTypes } from 'react';

class InheritableFlag extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { onBlur, onChange, value, ...rest } = this.props;
        const { val, isOverriden } = value;

        const getValue = event => {
            return {
                val: this.refs.flagValue.value,
                isOverriden: this.refs.isOverriden.value
            };
        };

        const override = () => {
            this.refs.isOverriden.value = 'true';
        };

        return (
            <span>
                <input
                    ref="flagValue"
                    type="text"
                    value={value.val}
                    onChange={event => onChange( getValue(event) )}
                    onBlur={event => onBlur( getValue(event) )}
                    {...rest} />
                <input ref="isOverriden" type="hidden" value={value.isOverriden} />
                <a href="#" onClick={override}>override</a>
            </span>
        );
    }

}

InheritableFlag.propTypes = {

};

export default InheritableFlag;
