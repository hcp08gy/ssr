import * as ActionTypes from '../ActionTypes';

export default (state = 0, action:any) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return state + 1;
        case ActionTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}