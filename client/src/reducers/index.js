import {combineReducers} from 'redux';
import itemReducer from './itemReducer'; //import Auth, Errors, Reports, etc

export default combineReducers({
    item: itemReducer,
    // auth: authReducer; errors: errorReducers; reports: reportReducer, etc.
});
