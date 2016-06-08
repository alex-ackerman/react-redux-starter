import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import FlagForm from './components/FlagForm';
import LoginForm from './components/LoginForm';
import DynamicForm from './components/DynamicForm';
import phrases from './reducers/phraseReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    phrases,
    form: formReducer
});

let store = createStore( reducers );

const deferredSubmit = (data) => {
    const deferred = new Promise(resolve => {
        setTimeout(() => {
            resolve({ submitted: data });
        }, 1500);
    });
    return deferred.then( data => console.log(data) );
};

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.phrases.map(phrase => <li key={phrase}><a href="#" onClick={(e) => this.props.handleClick(e, phrase)}>{phrase}</a></li>);
        const fieldsConfig = {
            name: {
                order: 0,
                placeholder: 'Name',
                label: 'Name',
                type: 'text'
            },
            lastName: {
                order: 1,
                placeholder: 'Last Name',
                label: 'Last Name',
                type: 'text'
            },
            email: {
                order: 2,
                placeholder: 'user@server',
                label: 'Email',
                type: 'email'
            }
        };
        return (
            <div>
                <LoginForm fields={['username', 'password']} onSubmit={ deferredSubmit } />
                <DynamicForm fields={['lastName', 'name', 'email']} fieldsConfig={fieldsConfig} onSubmit={ deferredSubmit } />
                <button onClick={this.props.handleButtonPress}>Click Me</button>
                <ul>
                    { list }
                </ul>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        phrases: state.phrases
    };
};
const mapDispatchToProps = (dispatch) => ({
    handleClick: function(e, phrase) {
        dispatch({
            type: 'PHRASE_CLICK',
            payload: {
                e,
                phrase
            }
        });
    },
    handleButtonPress: function(e) {
        dispatch({
            type: 'BUTTON_PRESS'
        });
    }
});

App = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('main'));
