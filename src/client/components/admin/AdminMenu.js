import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {gatherListings, foundListings} from "../../actions/listing.actions";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartPie, faUser, faBookOpen, faColumns, faTrash} from '@fortawesome/free-solid-svg-icons';
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

	componentDidMount() {
		this.props.gatherListings({isApproved: false, isDenied: false})
		.then(res => {
			this.setState({
				browseListings: foundListings
			})
		})
		.catch(err => {
			console.log("Error while getting the listings");
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
						<Link to="/admin-denied" className="admin-menu">
							<FontAwesomeIcon className="admin-icon" icon={faTrash}/>
							Denied Listings
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

AdminMenu.propTypes = {
	gatherListings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{gatherListings}
)(AdminMenu);