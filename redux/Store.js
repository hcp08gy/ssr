import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers';

// 创建store并引入中间价thunk进行异步操作的管理
const store = createStore(Reducers, applyMiddleware(thunk));

export default store;
