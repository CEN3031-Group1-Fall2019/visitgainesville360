import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getAllListings} from "../../actions/listing.actions";
import {Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faUser, faBookOpen, faColumns } from '@fortawesome/free-solid-svg-icons';

class AdminNotifications extends React.Component {
	constructor() {
		super();
		this.renderNewListingNotification = this.renderNewListingNotification.bind(this);
		this.setUnapprovedListings = this.setUnapprovedListings.bind(this);
	}

	setUnapprovedListings(res) {
		console.log("Beggining the count");
		res = 0;
		for(let listing of Object.values(this.props.listing.browseListing)) {
			console.log("Checking approved");
			if(!listing.isApproved) {
				res++;
				console.log("Counting:", res);
			}
		}
		console.log("Finished the count");
		return res;
	}

	renderNewListingNotification() {
		console.log("Rendering notifications");
		this.setUnapprovedListings(function(res) {
			console.log("Counted listings", res);
			if (res > 0) {
				return (
					<span className="badge admin-notification">{res}</span>
				);
			} else {
				return null;
			}
		});
		return null;
	}

	render() {
		var isAdmin = this.props.login.isAdmin;
		console.log("Admin: ", isAdmin);
		
		if (isAdmin) {
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
							Listings
							<this.renderNewListingNotification />
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
	getAllListings: PropTypes.func.isRequired,
	listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	login: state.login,
	listing: state.listing
});

export default connect(
	mapStateToProps,
	{getAllListings}
)(AdminMenu);