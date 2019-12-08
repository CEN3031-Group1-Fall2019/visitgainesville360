import React from 'react';
import {connect} from 'react-redux';
import {Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faUser, faBookOpen } from '@fortawesome/free-solid-svg-icons';

class AdminMenu extends React.Component {

	render() {
		var isAdmin = this.props.login.isAdmin;
		console.log("Admin: ", isAdmin);
		
		if (isAdmin) {
			return  (
				<div className="admin-menu-container">
					<Nav className="flex-column">
						<p className="menu-header">Admin Console</p>
						<hr />
						<Link to="/requests" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faBookOpen}/>
							Listings
							<span class="badge admin-notification">9</span>
						</Link>
						<Link to="/users" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faUser}/>
							Users
							<span class="badge admin-notification">4</span>
						</Link>
						<Link to="/stats" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faChartPie}/>
							Stats
						</Link>
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