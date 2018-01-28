import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InvestForm from './InvestForm';
import * as types from '../reducers/loans/constants';
/*global $*/

const openInvestmentForm = (setSelectedLoan, loan) => {
  setSelectedLoan(loan);
  $('.tiny.modal').modal('show');
};

const getLoans = (loans, setSelectedLoan) => loans.map((loan, index) => {
	return <div className="ui padded blue segment" key={index}>
		<div className="ui two column grid">
			<div className="ui twelve wide  column">
				<h3 className="ui header">{loan.title}</h3>
				<div className="meta">
					<span>
						<strong> Tranche:</strong> {loan.tranche} --
						<strong> Available: &#163;</strong>  {loan.available} --
						<strong> Amount: &#163;</strong> {loan.amount} --
            <strong> Annualised Return:</strong> {loan.annualised_return} --
            <strong> LTV:</strong> {loan.ltv} --
					</span>
		      	</div>
		    </div>
		    <div className="ui right aligned four wide column">
		    	{ loan.invested && <div className="meta">
            <span className="ui green header"><strong>Invested</strong></span>
          </div> }
		      	<div className="ui primary fluid button" onClick={() => openInvestmentForm(setSelectedLoan, loan)}>Invest in Loan</div>
	      	</div>
	    </div>
	</div>
});

const Loans = ({ loans, setSelectedLoan }) => (
	<div className="column">
		{getLoans(loans, setSelectedLoan)}
    <InvestForm />
	</div>
);

Loans.displayName = 'Loans';
Loans.propTypes = {
  loans: PropTypes.array.isRequired
}
Loans.defaultProps = {
  loans: []
}

const mapStateToProps = ({ loans }) => ({
	loans: loans.investmentLoans
});

const mapDispatchToProps = dispatch => ({
  setSelectedLoan: loan => dispatch({ type: types.SET_SELECTED_LOAN, payload: loan})
});

export default connect(mapStateToProps, mapDispatchToProps)(Loans);