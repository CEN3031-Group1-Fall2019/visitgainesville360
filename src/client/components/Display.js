import React from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {displayUser} from "../actions/display.actions"

class Display extends React.Component {

	constructor() {
		super();
		this.state = {
			name: 'Name',
			email: 'biz1@email.com',
			errors: {}
		};
	}

	getUserFromDB() { 
//		var email2 = "biz1@email.com";
		const newUser = {
			email: "biz1@email.com"
		};

		console.log(this.state);

		console.log('getUserFromDB() :');
		console.log(newUser);

		this.props.displayUser(newUser, this.props.history);
	}

	
	displayText() {
		return (<p> yo </p>);
	}
	


	render() {
		return (
			<div>
			{this.getUserFromDB()}
			{this.displayText()}
			</div>
		);
	}

}

//export default Display;


Display.propTypes = {
	displayUser: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	login: state.login,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{displayUser}
)(withRouter(Display));
