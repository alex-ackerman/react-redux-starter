import * as UserActions from '../actions/userActions';

const defaultState = {
    initialized: false,
    name: null,
    alias: null,
    email: null
};

const displayReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UserActions.DISPLAY_USER_DATA:
            return {
                initialized: true,
                name: action.payload.fullName,
                alias: action.payload.username,
                email: action.payload.email
            };
        default:
            return state;
    }
};

export default displayReducer;
