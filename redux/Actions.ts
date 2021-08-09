import axios from 'axios';
import { Dispatch } from 'redux';
import * as ActionTypes from './ActionTypes';

const mockUrl = 'http://test-mock.stg.yqb.com/hcp/mock/api/demo1';

export const increment = () => {
    return {
        type: ActionTypes.INCREMENT
    };
};
  
export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT
    };
};

export const fetchUserList = () => {
    return (dispatch: Dispatch) => {
        return axios.get(mockUrl).then((res) => {
            const {data} = res;
            const {result} = data || {};
            if(result) {
                dispatch({
                    type: ActionTypes.FETCH_USER_LIST,
                    userList: result
                });
            }
        })
    }
}