import React from 'react';
import {connect} from 'react-redux';
import {Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartPie, faUser, faBookOpen, faColumns} from '@fortawesome/free-solid-svg-icons';
import Axios from "axios";


const newListingCriteria = {
	isApproved: false,
	isDenied: false
}

class AdminMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newListings: ''
		};
	}

	componentDidUpdate() {
		Axios
		.post("/admin/notification", newListingCriteria)
		.then(res => {
			this.setState({
				newListings: res.data
			});
		})
		.catch(err => {
			console.log("Error while getting notifications: ", newListingCriteria);
			console.log(err);
		});
	}

	componentDidMount() {
		Axios
		.post("/admin/notification", newListingCriteria)
		.then(res => {
			this.setState({
				newListings: res.data
			});
		})
		.catch(err => {
			console.log("Error while getting notifications: ", newListingCriteria);
			console.log(err);
		});
	}

	renderNewListingNotification = () => {
		if (this.state.newListings > 0) {
			return (
				<span className="badge admin-notification">{this.state.newListings}</span>
			);
		}
		return null;
	}

	render() {
		var isAdmin = this.props.login.isAdmin;
		console.log("Admin: ", isAdmin);
		
		if (isAdmin) {
			return  (
				<div className="admin-menu-container">
					<Nav className="d-flex flex-column">
						<p className="menu-header">Admin Console</p>
						<hr />
						<Link to="/admin-dashboard" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faColumns}/>
							Dashboard
						</Link>
						<Link to="/admin-listings" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faBookOpen}/>
							New Listings
							{this.renderNewListingNotification()}
						</Link>
						<Link to="/admin-users" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faUser}/>
							Users
						</Link>
						<Link to="/admin-stats" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faChartPie}/>
							Stats
						</Link>
					</Nav>
				</div>
			);
		}
		return null;
	}
}

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps
)(AdminMenu);