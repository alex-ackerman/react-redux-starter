import React from 'react';

export default class Messages extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const createMessage = (msg) => <li><a>{msg}</a></li>;
        return (
            <ul>
                { this.props.messageList.map( createMessage ) }
            </ul>
        );
    }

}

Messages.propTypes = {
    messageList: React.PropTypes.array.isRequired
};
