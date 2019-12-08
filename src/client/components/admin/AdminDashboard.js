import React from 'react';
import {connect} from "react-redux";
import AdminMenu from "./AdminMenu";

class AdminDashboard extends React.Component {

	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		return (
			<div className="container">
				<p className="page-header">ADMIN CONFIRMED!</p>
        	</div>
		);
	}
}

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps
)(AdminDashboard);