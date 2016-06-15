import React, { Component, PropTypes } from 'react';

const stringToBool = (str) => {
    switch (str) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            throw new Error(`Unsupported bool string "${str}"`);
    }
};

class InheritableFlag extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { onBlur, onChange, value, ...rest } = this.props;
        const { val, inheriting } = value;

        const getValue = (event, shouldInherit) => {
            return {
                val: this.refs.flagValue.value,
                inheriting: {
                    from: this.refs.inheritFrom.value,
                    inheritAvailable: true,
                    shouldInherit
                }
            };
        };
        const inheritClick = e => {
            e.preventDefault();
            onChange({
                val: this.refs.flagValue.value,
                inheriting: {
                    from: 'will inherit soon...',
                    inheritAvailable: false,
                    shouldInherit: true
                }
            });
        };

        const inheritButton = inheriting.inheritAvailable ? <button onClick={ inheritClick }>Inherit</button> : null;

        return (
            <span>
                <input
                    disabled={inheriting.shouldInherit}
                    ref="flagValue"
                    type="text"
                    value={val}
                    onChange={event => onChange( getValue(event, inheriting.shouldInherit) )}
                    onBlur={event => onBlur( getValue(event, inheriting.shouldInherit) )}
                    {...rest} />
                <input 
                    ref="inheritFrom" 
                    type="text" 
                    value={inheriting.from} 
                    onChange={event => onChange( getValue(event, inheriting.shouldInherit) )}
                    onBlur={event => onBlur( getValue(event, inheriting.shouldInherit) )}
                    {...rest} />
                { inheritButton }
            </span>
        );
    }

}

InheritableFlag.propTypes = {

};

export default InheritableFlag;
