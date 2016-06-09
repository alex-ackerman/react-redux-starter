import React, { Component, PropTypes } from 'react';

class LoadingIndicator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isLoading } = this.props;
        if (!isLoading) {
            return null;
        }
        return (
            <div>
                <h4>Please wait...</h4>
            </div>
        );
    }
}
LoadingIndicator.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default LoadingIndicator;
