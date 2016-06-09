import * as UserActions from '../actions/userActions';
import * as DisplayActionCreators from './displayActionCreators';
import * as DataStateActionCreators from './dataStateActionCreators';

export const getUserData = (userId) => {
    return (dispatch, getState) => {
        dispatch( DisplayActionCreators.resetDisplay() );
        dispatch( DataStateActionCreators.dataLoadingStarted() );
        const userDetails = getState().users.usersDetails[userId];
        const userDetailsPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(userDetails);
            }, 1000);
        });
        userDetailsPromise.then(userDetails => {
            dispatch( DisplayActionCreators.displayUserDetails(userDetails) );
            dispatch( DataStateActionCreators.dataLoadingFinished() );
        });
    };
};
