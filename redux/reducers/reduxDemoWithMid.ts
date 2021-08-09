import * as ActionTypes from '../ActionTypes';

export default (state = {}, action:any) => {
    switch (action.type) {
        case ActionTypes.FETCH_USER_LIST:
            return {
                ...state,
                userList: action.userList
            }
        default:
            return state;
    }
}