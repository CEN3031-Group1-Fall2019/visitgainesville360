import React from 'react';
import PropTypes from "prop-types";
import {getAllListings} from "../../actions/listing.actions";
import {updateListing} from "../../actions/admin.actions";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {CardDeck, Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class AdminListings extends React.Component {
	constructor() {
		super();
		this.state = {
			hasListings: false
		};
	}

	approveBusiness = listing => {
		return function(){
			var updateData = {
				listing: listing,
				updates: {
					isApproved: true
				}
			}
			this.props.updateListing(updateData);
		}
	}

	approveButton = listing => {
		return (
			<div>
				<Button 
					variant="success"
					onClick={this.approveBusiness(listing).bind(this)}>
					<FontAwesomeIcon icon={faThumbsUp}/>
				</Button>
        	</div>
		);
	}

	businessCard = (listing) => {
		if(!listing.isApproved) {
			return(
				<Card border="dark" style={{ width: '12rem', }}>
				<Card.Img variant="top" src={listing.image} />
				<Card.Body>
					<Card.Title>{listing.title}</Card.Title>
					<Card.Text>{listing.phone}</Card.Text>
					<Card.Text>{listing.address}<br />
					{listing.city}, {listing.state} {listing.zip}</Card.Text>
					<Card.Text>{listing.description}</Card.Text>
					<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
						{this.approveButton(listing)}
						<Link to='/deny'><Button style={{flex:'1'}} variant="danger"><FontAwesomeIcon icon={faThumbsDown}/></Button></Link>
						<Link to='/view'><Button style={{flex:'1'}}variant="info"><FontAwesomeIcon icon={faInfoCircle}/></Button></Link>
					</div>
				</Card.Body>
				</Card>
			)
		} else return null;
	}

	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		var businessListings = [];
		for(let listing of Object.values(this.props.listing.browseListing)) {
			businessListings.push(this.businessCard(listing));
		}

		return (
			<div className="container">
				<p className="page-header">Overview of Recent Acitity</p>
				<hr />
				<p className="sub-header">Listing Requests</p>
				<CardDeck>{businessListings}</CardDeck>
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