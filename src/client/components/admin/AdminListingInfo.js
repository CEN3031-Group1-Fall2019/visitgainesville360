import React from 'react';
import PropTypes from "prop-types";
import {getAllListings} from "../../actions/listing.actions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {Button, Image} from "react-bootstrap";

class AdminListingInfo extends React.Component {
	constructor() {
		super();
		this.state = {
			listing: []
		};
	}

	setListing(setListing) {
		this.setState({listing: setListing});
	}

	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		return (
			<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
				<p className="page-header">{this.state.listing.title}</p>
				<Image src={this.state.listing.image} rounded='true' />
				<Button style={{flex:'1'}} variant="success"><FontAwesomeIcon icon={faThumbsUp}/></Button>
				<Button style={{flex:'1'}} variant="danger"><FontAwesomeIcon icon={faThumbsDown}/></Button>
				<Button style={{flex:'1'}} variant="info"><FontAwesomeIcon icon={faInfoCircle}/></Button>
			</div>
		);
	}
}

AdminListingInfo.propTypes = {
	getAllListings: PropTypes.func.isRequired,
	listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	listing: state.listing,
	login: state.login
});

export default connect(
	mapStateToProps,
	{getAllListings}
)(AdminListingInfo);