import * as types from './constants';
const { loans } = require('../../current-loans.json');

const initialState = {
  investmentLoans: loans,
  selectedLoan: loans[0]
}

const commaNumberToInt = numberWithComma => parseInt(numberWithComma.split(',').join(''), 10);
const numberWithCommas = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const loansReducer = (state = initialState, action) => {
   const { type, payload, loanId, amountToInvest } = action;

   switch(type) {
    case types.SET_SELECTED_LOAN:
      return {
        ...state,
        selectedLoan: payload
      }
    case types.SET_INVESTMENT:
      return {
        ...state,
        investmentLoans: state.investmentLoans.map((investmentLoan) => {
          if (investmentLoan.id === loanId) {
            return {
              ...investmentLoan,
              available: numberWithCommas(commaNumberToInt(investmentLoan.available) - commaNumberToInt(amountToInvest)),
              amount: numberWithCommas(commaNumberToInt(investmentLoan.amount) + commaNumberToInt(amountToInvest)),
              invested: true
            };
          }
          return {
            ...investmentLoan
          };
        })
      }
    default:
      return state;
   }
}

export default loansReducer;