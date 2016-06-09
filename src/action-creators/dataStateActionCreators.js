import * as DataStateActions from '../actions/dataStateActions';

export const dataLoadingStarted = () => {
    return {
        type: DataStateActions.LOADING_DATA
    };
};

export const dataLoadingFinished = () => {
    return {
        type: DataStateActions.FINISHED_LOADING
    };
};
