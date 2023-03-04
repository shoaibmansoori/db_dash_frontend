import {combineReducers} from 'redux';
import userReducer from './user/userSlice.js';

const rootReducer = combineReducers({
    user:userReducer
});

export default rootReducer;