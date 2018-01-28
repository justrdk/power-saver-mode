import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const getLoans = ({ loans }) => loans.map((loan, index) => {
	return <div className="ui padded blue segment" key={index}>
		<div class="ui two column grid">
			<div className="ui twelve wide  column">
				<h3 className="ui header">{loan.title}</h3>
				<div class="meta">
					<span>
						<strong> Tranche:</strong> {loan.tranche},
						<strong> Available: &#163;</strong>  {loan.available},
						<strong> Amount: &#163;</strong> {loan.amount}
					</span>
		      	</div>
		    </div>
		    <div className="ui right aligned four wide column">
		    	<div class="meta">
		    		<span className="green"><strong>Invested</strong></span>
		    	</div>
		      	<div class="ui primary fluid button">Invest in Loan</div>
	      	</div>
	    </div>
	</div>
});

const Loans = loans => (
	<div className="column">
		{getLoans(loans)}
	</div>
);

const mapStateToProps = ({ loans }) => (
	loans
)

Loans.propTypes = {
	loans: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Loans);