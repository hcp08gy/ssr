import * as ActionTypes from '../ActionTypes';

export default (state = 'hello', action:any) => {
    switch (action.type) {
        default:
            return state;
    }
}