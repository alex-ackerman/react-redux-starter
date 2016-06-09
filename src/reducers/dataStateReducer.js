import * as DataStateActions from '../actions/dataStateActions';

const initialState = {
    isLoading: false
};

const dataStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case DataStateActions.LOADING_DATA:
            return {
                isLoading: true
            };
        case DataStateActions.FINISHED_LOADING:
            return {
                isLoading: false
            };
        default:
            return state;
    }
};

export default dataStateReducer;
