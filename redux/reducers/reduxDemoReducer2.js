import * as ActionTypes from '../ActionTypes';

export default (state = 'hello', action) => {
    switch (action.type) {
        default:
            return state;
    }
}