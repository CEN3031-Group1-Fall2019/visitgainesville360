import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {CardDeck, Card, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Axios from "axios";

class Browse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			browseListings: ''
		};
	}

	//	typetag: {type: String},
	//	loctag: {type: String},

	componentDidMount() {
		var pathname = this.props.location.pathname;
		var listingId = pathname.substring(pathname.lastIndexOf("/") + 1);;
		console.log("this is it", listingId);

		Axios
		.post("/listings/browse")
		.then(res => {
			this.setState({
				browseListings: res.data
			});
		})
		.catch(err => {
			console.log("Error getting all listings");
			console.log(err);
		});
	}

	businessCard = listing => {
		if(listing.isApproved) {
			return (
				<Card>
				<Card.Img variant="top" src={listing.image} />
				<Card.Body>
					<Card.Title>{listing.title}</Card.Title>
					<Card.Text>{listing.phone}</Card.Text>
					<Card.Text>{listing.address}<br />
					{listing.city}, {listing.state} {listing.zip}</Card.Text>
					<Card.Text>{listing.description}</Card.Text>
					<Card.Text>{this.renderTags(listing)}</Card.Text>
					<Card.Body>{this.renderHours(listing.hours)}</Card.Body>
					<Button variant="info"><FontAwesomeIcon icon={faInfoCircle}/></Button>
				</Card.Body>
				</Card>);
		} else return null;
	}

	renderTags = (listing) => {
		if (listing.hasOwnProperty('typetag') || listing.hasOwnProperty('loctag'))
		{
			return (
				<div>
					Tags: {listing.typetag} {listing.loctag}
				</div>
			);
		}
	}
	
	renderHours = (hours) => {
		if(hours !== undefined) {
			var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
			var displayHours = [];
	
			for(let day of daysOfWeek) {
				if(hours.day !== undefined) {
					displayHours.push(<div>{day}: {moment(hours.day.startTime).format('hh:mm a')} - {moment(hours.day.endTime).format('hh:mm a')} <br /></div>);
				}
			}
			
			return displayHours;
		} return null;
	}

	render() {
		var businessListings = [];
		for(let listing of Object.values(this.state.browseListings)) {
			businessListings.push(this.businessCard(listing));
		}

		return (
			<div className="d-flex justify-content-center p-5">
				<CardDeck>{businessListings}</CardDeck>
			</div>
		);
	}

}

Browse.propTypes = {
	listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	listing: state.listing
});

export default connect(
	mapStateToProps
)(Browse); 