import * as DisplayActions from '../actions/displayActions';

export const displayUserDetails = (userData) => {
    return {
        type: DisplayActions.DISPLAY_USER_DATA,
        payload: userData
    };
}

export const resetDisplay = () => {
    return {
        type: DisplayActions.RESET_DISPLAY
    };
};
