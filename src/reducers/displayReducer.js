import * as UserActions from '../actions/userActions';
import * as DisplayActions from '../actions/displayActions';

const defaultState = {
    initialized: false,
    name: null,
    alias: null,
    email: null
};

const displayReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DisplayActions.DISPLAY_USER_DATA:
            return {
                initialized: true,
                name: action.payload.fullName,
                alias: action.payload.username,
                email: action.payload.email
            };
        case DisplayActions.RESET_DISPLAY:
            return defaultState;
        default:
            return state;
    }
};

export default displayReducer;
