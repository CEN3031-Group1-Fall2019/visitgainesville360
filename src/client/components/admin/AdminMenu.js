import React from 'react';
import {connect} from 'react-redux';
import {Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

class AdminMenu extends React.Component {

	render() {
		var isAdmin = this.props.login.isAdmin;
		console.log("Admin: ", isAdmin);
		
		if (isAdmin) {
			return  (
				<div className="admin-menu-container">
					<Nav className="flex-column">
						<Link to="/requests" className="admin-menu">Requests</Link>
						<Link to="/users" className="admin-menu">Users</Link>
					</Nav>
				</div>
			);
		} else {
			return (<div></div>);
		}
	}
}

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps
)(AdminMenu);