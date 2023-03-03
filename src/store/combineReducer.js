import {combineReducers} from 'redux';
import tableReducer from './table/tableSlice';


const rootReducer = combineReducers({
    table:tableReducer
});

export default rootReducer; 