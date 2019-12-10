import React from 'react';
import PropTypes from "prop-types";
import {getAllListings} from "../../actions/listing.actions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {Button, Image} from "react-bootstrap";

class ViewListing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentListing: []
		};
	}

	setListing(setListing) {
		this.setState({listing: setListing});
	}

	adminControls() {
		if (this.props.login.user.isAdmin) {
			
		}
	}

	render() {
		console.log("Has current listing?");
		var {currentListing} = this.props;
		console.log("this is it", currentListing);
		return (
			<div className="flex flex-center flex-children">
				<p className="page-header">{this.state.listing.title}</p>
				<Image src={this.state.listing.image} rounded='true' />
				<Button variant="success"><FontAwesomeIcon icon={faThumbsUp}/></Button>
				<Button variant="danger"><FontAwesomeIcon icon={faThumbsDown}/></Button>
				<Button variant="info"><FontAwesomeIcon icon={faInfoCircle}/></Button>
			</div>
		);
	}
}

ViewListing.propTypes = {
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
)(ViewListing);