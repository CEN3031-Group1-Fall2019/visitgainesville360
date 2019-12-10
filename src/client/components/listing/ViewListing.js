import React from 'react';
import PropTypes from "prop-types";
import {getSingleListing} from "../../actions/listing.actions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";
import AdminControls from '../admin/AdminControls';
import Axios from "axios";

class ViewListing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentListing: '',
			stateSet: false
		};
	}

	componentDidMount() {
		var pathname = this.props.location.pathname;
		var listingId = pathname.substring(pathname.lastIndexOf("/") + 1);;
		console.log("this is it", listingId);

		Axios
		.post("/listings/get", {id: listingId})
		.then(res => {
			this.setState({
				currentListing: res.data,
				stateSet: true
			})
		})
		.catch(err => {
			console.log("Error getting all listings");
			console.log(err);
		});
	}

	adminControls(listing) {
		if (this.props.login.user.isAdmin) {
			return (<AdminControls
				{...this.props}
				currentListing={listing} />);
		}
	}

	render() {
		console.log("The current listing: ", this.state.currentListing);
		return (
			<div className="d-flex flex-row justify-content-center row">
				<p className="page-header">{this.state.currentListing.title}</p>
				<div className="d-flex justify-content-center row mb-2">
					<img src={this.state.currentListing.image} />
				</div>
				<div className="d-flex row mb-5 justify-content-center">
					<div className="col-2">
						<p className="sub-header">Phone</p>
						<p className="d-flex justify-content-center">{this.state.currentListing.phone}</p>
					</div>
					<div className="col-3">
						<p className="sub-header">Address</p>
						<p className="d-flex justify-content-center">{this.state.currentListing.address}<br />
						{this.state.currentListing.city}, {this.state.currentListing.state} {this.state.currentListing.zip}</p>
					</div>
				</div>
				<div className="d-flex row justify-content-center">
					<div className="col-5">
						<p className="sub-header">Description</p>
						{this.state.currentListing.description}
					</div>
				</div>
			</div>
		);
	}
}

ViewListing.propTypes = {
	getSingleListing: PropTypes.func.isRequired,
	listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	listing: state.listing,
	login: state.login
});

export default connect(
	mapStateToProps,
	{getSingleListing}
)(ViewListing);