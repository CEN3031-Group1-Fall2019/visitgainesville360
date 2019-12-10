import React from 'react';
import PropTypes from "prop-types";
import {updateListing} from "../../actions/admin.actions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

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
			this.props.history.push("/admin-listings");
		}
	}

	approveButton = () => {
		var updates = {
			isApproved: true
		};

		return (
			<div>
				<Button 
					variant="success"
					onClick={this.updateBusiness(updates).bind(this)}>
					<FontAwesomeIcon icon={faThumbsUp}/>
				</Button>
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
				<Button 
					variant="danger"
					onClick={this.updateBusiness(updates).bind(this)}>
					<FontAwesomeIcon icon={faThumbsDown}/>
				</Button>
        	</div>
		);
	}

	infoButton = () => {
		console.log("Current listing: ", this.state.currentListing);
		return (
			<div>
				<Link to={`/listing/${this.state.currentListing._id}`}>
				<Button variant="info">
					<FontAwesomeIcon icon={faInfoCircle}/>
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

		return (
			<div className="flex-center flex-bottom row">
				<div className="col-1">{this.approveButton()}</div>
				<div className="col-1">{this.denyButton()}</div>
				<div className="col-1">{this.infoButton()}</div>
			</div>
		);
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