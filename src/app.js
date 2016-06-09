import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import ClickableUserList from './containers/ClickableUserList';
import ConnectedUserDetailsPane from './containers/ConnectedUserDetailsPane';
import UsersDataLoadingIndicator from './containers/UsersDataLoadingIndicator';
import users from './reducers/usersReducer';
import display from './reducers/displayReducer';
import dataState from './reducers/dataStateReducer';

const reducers = combineReducers({
    users,
    display,
    dataState
});
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const App = () => (
    <div>
        <ClickableUserList />
        <UsersDataLoadingIndicator />
        <ConnectedUserDetailsPane />
    </div>
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('main')
);
