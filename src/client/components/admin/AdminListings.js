import React from 'react';
import PropTypes from "prop-types";
import {getAllListings} from "../../actions/listing.actions";
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

	viewInfo = listing => {
	}

	businessCard = () => {
		var unaprrovedListings = [];
		
		for(let listing of Object.values(this.props.listing.browseListing)) {
			if(!listing.isApproved) {
				unaprrovedListings.push(
					<Card border="dark" style={{ width: '12rem', }}>
					<Card.Img variant="top" src={listing.image} />
					<Card.Body>
						<Card.Title>{listing.title}</Card.Title>
						<Card.Text>{listing.phone}</Card.Text>
						<Card.Text>{listing.address}<br />
						{listing.city}, {listing.state} {listing.zip}</Card.Text>
						<Card.Text>{listing.description}</Card.Text>
						<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
							<Link to='/approve'><Button style={{flex:'1'}} variant="success"><FontAwesomeIcon icon={faThumbsUp}/></Button></Link>
							<Link to='/deny'><Button style={{flex:'1'}} variant="danger"><FontAwesomeIcon icon={faThumbsDown}/></Button></Link>
							<Link to='/view'><Button style={{flex:'1'}}variant="info"><FontAwesomeIcon icon={faInfoCircle}/></Button></Link>
						</div>
					</Card.Body>
					</Card>
				);
			}
		}
		return unaprrovedListings;
	}

	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		return (
			<div className="container">
				<p className="page-header">Overview of Recent Acitity</p>
				<hr />
				<p className="sub-header">Listing Requests</p>
				<CardDeck>
					<this.businessCard />
				</CardDeck>
        	</div>
		);
	}
}

AdminListings.propTypes = {
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
)(AdminListings);