import * as types from './constants';
const { loans } = require('../../current-loans.json');

const initialState = {
	loans
}

const loansReducer = (state = initialState, action) => {
	 const { type, payload } = action;

	 switch(type) {
	 	default:
	 		return state;
	 }
}

export default loansReducer;