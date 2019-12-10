import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {updateListing} from "../../actions/admin.actions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";

class AdminListings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentListing: '',
			stateSet: false
		};
	}

	updateBusiness = (updates)  => {
		return function(){
			var updateData = {
				listing: this.state.currentListing,
				updates: updates
			}
			this.props.updateListing(updateData);
		}
	}

	approveButton = () => {
		var updates = {
			isApproved: true,
			isDenied: false
		};

		return (
			<div>
				<Link to="/admin-listings">
				<Button 
					variant="success"
					onClick={this.updateBusiness(updates).bind(this)}>
					<FontAwesomeIcon icon={faThumbsUp}/>
				</Button>
				</Link>
        	</div>
		);
	}

	denyButton = () => {
		var updates = {
			isApproved: false,
			isDenied: true
		};

		return (
			<div>
				<Link to="/admin-listings">
				<Button 
					variant="danger"
					onClick={this.updateBusiness(updates).bind(this)}>
					<FontAwesomeIcon icon={faThumbsDown}/>
				</Button>
				</Link>
        	</div>
		);
	}

	render() {
		if (!this.props.login.user.isAdmin) return null;

		if(!this.state.stateSet) {
			const {currentListing} = this.props;
			this.setState({
				currentListing: currentListing,
				stateSet: true
			});
		}

		if(this.state.stateSet) {
			return (
				<div className="d-flex justify-content-center align-items-bottom row">
					<div className="col-1">{this.approveButton()}</div>
					<div className="col-1">{this.denyButton()}</div>
				</div>
			);
		}
		return null;
	}
}

AdminListings.propTypes = {
	updateListing: PropTypes.func.isRequired,
	listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	listing: state.listing,
	login: state.login
});

export default connect(
	mapStateToProps,
	{updateListing}
)(AdminListings);