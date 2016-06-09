import * as UserActions from '../actions/userActions';

const defaultState = {
    usersOrder: [12, 10, 11],
    usersDetails: {
        10: {
            username: 'HLHLH',
            fullName: 'Adas Vialm',
            email: 'HLHLH@mail'
        },
        11: {
            username: 'lolz',
            fullName: 'Alod Gloaj',
            email: 'lolz@mailz'
        },
        12: {
            username: 'zupp',
            fullName: 'Lokap Koel',
            email: 'zupp@mymail'
        }
    }
};

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UserActions.ADD_USER:
            return addUser(state, action.payload);
        case UserActions.REMOVE_USER:
            return removeUser(state, action.payload);
        case UserActions.FILTER_USERS:
            return filterUsers(state, action.payload);
        default:
            return state;
    }
};

function displayUserData(state, userData) {
    console.log(`===> DISPLAY`, state, userData);
    return state;
}

function addUser(state, userData) {
    console.log(`===> ${UserActions.ADD_USER}: `, state, payload);
    return state;
}

function removeUser(state, userId) {
    return state;
}

function filterUsers(state, filterValue) {
    return state;
}

export default usersReducer;
