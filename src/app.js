import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import ClickableUserList from './containers/ClickableUserList';
import users from './reducers/usersReducer'

const reducers = combineReducers({
    users
});
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const App = () => (
    <div>
        <ClickableUserList />
    </div>
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('main')
);
