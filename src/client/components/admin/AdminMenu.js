import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getNotifications} from "../../actions/admin.actions";
import {Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faUser, faBookOpen, faColumns } from '@fortawesome/free-solid-svg-icons';

class AdminMenu extends React.Component {
	renderNewListingNotification = count => {
		console.log("Rendering notifications");
		console.log("Count: ", count);
		if (count > 0) {
			return (
				<span className="badge admin-notification">{count}</span>
			);
		} else {
			return null;
		}
	}

	render() {
		var isAdmin = this.props.login.isAdmin;
		console.log("Admin: ", isAdmin);
		var newListings = 0;
		
		if (isAdmin) {
			if(!this.props.admin.isNotified) {
				var criteria = {
					isApproved: false,
					isDenied: false
				}
				this.props.getNotifications(criteria);
			} else {
				console.log("currNotifications: ", this.props.admin.currNotifications, "newListings", newListings);
				newListings = this.props.admin.currNotifications;
			}

			return  (
				<div className="admin-menu-container">
					<Nav className="flex-column">
						<p className="menu-header">Admin Console</p>
						<hr />
						<Link to="/admin-dashboard" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faColumns}/>
							Dashboard
						</Link>
						<Link to="/admin-listings" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faBookOpen}/>
							New Listings
							{this.renderNewListingNotification(newListings)}
						</Link>
						<Link to="/admin-users" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faUser}/>
							Users
							<span className="badge admin-notification">4</span>
						</Link>
						<Link to="/admin-stats" className="admin-menu">
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

AdminMenu.propTypes = {
	getNotifications:  PropTypes.func.isRequired,
	admin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	login: state.login,
	admin: state.admin
});

export default connect(
	mapStateToProps,
	{getNotifications}
)(AdminMenu);