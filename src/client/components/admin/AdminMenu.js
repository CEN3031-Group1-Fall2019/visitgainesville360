import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {getNotifications, newListings} from "../../actions/admin.actions";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartPie, faUser, faBookOpen, faColumns, faTrash} from '@fortawesome/free-solid-svg-icons';

class AdminMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newListings: ''
		};
	}

	componentDidMount() {
		this.props.getNotifications({isApproved: false, isDenied: false})
		.then(res => {
			this.setState({
				newListings: newListings
			})
		})
		.catch(err => {
			console.log("Error while getting Notifications");
			console.log(err);
		});
	}

	componentDidUpdate(prevState) {
		if (this.state.browseListing !== undefined
			&& prevState.browseListings !== this.state.browseListings) {
				this.props.getNotifications({isApproved: false, isDenied: false})
				.then(res => {
					this.setState({
						newListings: newListings
					})
				})
				.catch(err => {
					console.log("Error while getting the listings");
					console.log(err);
				});
		}
	}

	renderNewListingNotification = () => {
		console.log("New listings: ", this.state.newListings)
		if (this.state.newListings > 0) {
			return (
				<span className="badge admin-notification">{this.state.newListings.length}</span>
			);
		}
		return null;
	}

	render() {
		var isAdmin = this.props.login.isAdmin;
		
		if (isAdmin) {
			return  (
				<div className="admin-menu">
				<div className="row">
						<p className="h3 ml-5">Admin Console</p>
						<hr className="admin-hr" />
						<div className="admin-linkbar">
						<Link to="/admin-dashboard" className="admin-link">
							<FontAwesomeIcon className="admin-icon" icon={faColumns}/>
							 Dashboard
						</Link>
						| 
						<Link to="/admin-listings" className="admin-link">
							<FontAwesomeIcon className="admin-icon" icon={faBookOpen}/>
							 New Listings
							{this.renderNewListingNotification()}
						</Link>
						| 
						<Link to="/admin-denied" className="admin-link">
							<FontAwesomeIcon className="admin-icon" icon={faTrash}/>
							 Denied Listings
						</Link>
						| 
						<Link to="/admin-users" className="admin-link">
							<FontAwesomeIcon className="admin-icon" icon={faUser}/>
							 Users
						</Link>
					</div></div>
				</div>
			);
		}
		return null;
	}
}

AdminMenu.propTypes = {
	getNotifications: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{getNotifications}
)(AdminMenu);