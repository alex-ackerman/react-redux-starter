import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import FlagForm from './components/FlagForm';
import LoginForm from './components/LoginForm';
import DynamicForm from './components/DynamicForm';
import { reducer as formReducer } from 'redux-form';
import createLogger from 'redux-logger';

const logger = createLogger();

const reducers = combineReducers({
    form: formReducer
});

let store = createStore( 
    reducers,
    applyMiddleware(logger)
);

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
        const loginInitialValues = {
            username: 'zapp',
            flag: {
                val: 'ololo',
                inheriting: {
                    from: 'Not Inheriting',
                    inheritAvailable: true,
                    shouldInherit: false
                }
            }
        };
        return (
            <div>
                <LoginForm fields={ ['username', 'password', 'flag'] } initialValues={loginInitialValues} onSubmit={ deferredSubmit } />
                <DynamicForm
                    fields={ ['lastName', 'name', 'email'] }
                    fieldsConfig={ fieldsConfig }
                    onSubmit={ deferredSubmit } />
            </div>
        );
    }

}

const mapStateToProps = (state) => {

};
const mapDispatchToProps = (dispatch) => ({

});

App = connect()(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.querySelector('main'));

window.store = store;