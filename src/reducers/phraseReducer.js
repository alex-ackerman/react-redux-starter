const initialState = [
    'hello there',
    'hi!',
    'ssup?',
    'yo!',
    'heeeey'
];

let i = 1001;

export default function phrases(state = initialState, action) {
    switch (action.type) {
        case 'PHRASE_CLICK':
            console.log(`===> clicked ${action.payload.phrase}`);
            return state.slice(1).concat(state[0]);
        case 'BUTTON_PRESS':
            console.log('===> click button');
            return [].concat(state, i++);
        default:
            return state;
    }
}
