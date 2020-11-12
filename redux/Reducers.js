import { combineReducers } from 'redux'

import reduxDemoReducer from './reducers/reduxDemoReducer';
import reduxDemoReducer2 from './reducers/reduxDemoReducer2';
import reduxDemoWithMid from './reducers/reduxDemoWithMid';

const rootReducer = combineReducers({
    reduxDemoReducer,
    reduxDemoReducer2,
    reduxDemoWithMid
});

export default rootReducer;