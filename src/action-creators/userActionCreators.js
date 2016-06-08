import * as UserActions from '../actions/userActions';

export const getUserData = (userId) => {
    return (dispatch, getState) => {
        const userDetails = getState().users.usersDetails[userId];
        const userDetailsPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(userDetails);
            }, 1000);
        });
        userDetailsPromise.then(userDetails => dispatch( displayUserDetails(userDetails) ));
    };
};

export const displayUserDetails = (userData) => {
    return {
        type: UserActions.DISPLAY_USER_DATA,
        payload: userData
    };
}
