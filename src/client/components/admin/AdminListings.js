import React from 'react';
import PropTypes from "prop-types";
import {getAllListings} from "../../actions/listing.actions";
import {updateListing} from "../../actions/admin.actions";
import {connect} from "react-redux";
import {CardDeck, Card} from "react-bootstrap";
import AdminControls from './AdminControls';
import InfoControl from '../listing/InfoControl';

class AdminListings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasListings: false
		};
	}

	businessCard = listing => {
		if(!listing.isApproved && !listing.isDenied) {
			return(
				<div className="flex flex-row flex-children m-2">
				<Card border="dark">
				<Card.Img variant="top" src={listing.image} />
				<div className="card-body">
				<Card.Body>
					<Card.Title>{listing.title}</Card.Title>
					<Card.Text>{listing.phone}</Card.Text>
					<Card.Text>{listing.address}<br />
					{listing.city}, {listing.state} {listing.zip}</Card.Text>
					<Card.Text>{listing.description}</Card.Text>
					<div  className="card-action">
					<AdminControls
						{...this.props}
						currentListing={listing} />
					<InfoControl
						{...this.props}
						currentListing={listing} /></div>
				</Card.Body></div>
				</Card>
				</div>
			)
		} else return null;
	}

	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}
		
		if(!this.props.listing.isPosted) {
			this.props.getAllListings();
		}

		var businessListings = [];
		for(let listing of Object.values(this.props.listing.browseListing)) {
			businessListings.push(this.businessCard(listing));
		}

		return (
			<div className="container listings">
				<p className="page-header">Overview of Recent Acitity</p>
				<hr />
				<p className="sub-header">Listing Requests</p>
				<CardDeck className="row">{businessListings}</CardDeck>
        	</div>
		);
	}
}

AdminListings.propTypes = {
	updateListing: PropTypes.func.isRequired,
	getAllListings: PropTypes.func.isRequired,
	listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	listing: state.listing,
	login: state.login
});

export default connect(
	mapStateToProps,
	{getAllListings, updateListing}
)(AdminListings);