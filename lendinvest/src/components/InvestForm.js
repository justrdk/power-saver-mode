import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as types from '../reducers/loans/constants';

const InvestForm = ({ selectedLoan, investLoan }) => {
  let input;
  return (
      <div className="ui tiny modal">
      <div className="header">Invest in Loan</div>
      <div className="content">
        <div className="meta">
          <span>{selectedLoan.title}</span>
          <br/>
          <span><strong>Amount Available:</strong> &#163;{selectedLoan.available}</span>
        </div>
      </div>
      <div className="actions">
        <div className="ui labeled input">
          <label className="ui label">&#163;</label>
          <input type="number" placeholder="Amount" id="amount" ref={node => { input = node }} />
        </div>
        <div className="ui approve button" onClick={() => investLoan(selectedLoan.id, input.value)}>Invest Now</div>
      </div>
    </div>
    );
};

InvestForm.displayName = 'Invest Form';
InvestForm.propTypes = {
  selectedLoan: PropTypes.object
};
InvestForm.defaultProps = {
  selectedLoan: {}
};

const mapStateToProps = ({ loans }) => ({
  selectedLoan: loans.selectedLoan
});

const mapDispatchToProps = dispatch => ({
  investLoan: (loanId, amountToInvest) => dispatch({ type: types.SET_INVESTMENT, loanId, amountToInvest })
});

export default connect(mapStateToProps, mapDispatchToProps)(InvestForm);