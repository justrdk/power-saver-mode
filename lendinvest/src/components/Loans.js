import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const getLoans = ({ loans }) => loans.map((loan, index) => {
	return <div className="ui segment" key={index}>
		<p>{loan.title}</p>
	</div>
});

const Loans = loans => (
	<div className="column">
		<div className="ui raised segments">
			{getLoans(loans)}
		</div>
	</div>
);

const mapStateToProps = ({ loans }) => (
	loans
)

Loans.propTypes = {
	loans: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Loans);