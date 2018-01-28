import { combineReducers } from 'redux';
import loans from './loans/loans';

const appReducer = combineReducers({
	loans
});

export default appReducer;