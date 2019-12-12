import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {CardDeck, Card} from "react-bootstrap";
import {gatherListings} from "../../actions/listing.actions";
import moment from 'moment';
import InfoControl from './InfoControl';

const query = {
	isApproved: true,
	isDenied: false
}

class Browse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			browseListings: ''
		};
	}

	componentDidMount() {
		console.log("Fetching the listings");
		this.props.gatherListings(query, function(res) {
			this.setState({
				browseListings: res.data
			});
		});
	}

	businessCard = listing => {
		if(listing.isApproved) {
			return (
				<div className="card-browse">
				<Card>
				<Card.Img variant="top" src={listing.image} />
				<Card.Body>
						<Card.Title>{listing.title ? listing.title : ''}</Card.Title>
						<Card.Text>{listing.phone ? listing.phone : ''}
							{this.renderEmail(listing)}</Card.Text>
						<Card.Text>{listing.address ? listing.address : ''}<br />
						{listing.city ? listing.city+', ' : ''}
						{listing.state ? listing.state : ''}{' '}
						 {listing.zip ? listing.zip : ''}</Card.Text>
						<Card.Text>{listing.description ? listing.description : ''}</Card.Text>
					<Card.Text>{this.renderTags(listing)}</Card.Text>
					<Card.Text>{this.renderHours(listing.hours)}</Card.Text>
					<div className="d-flex justify-content-center">
					<InfoControl
						{...this.props}
						currentListing={listing} /></div>
				</Card.Body>
				</Card>
				</div>);
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
	
	renderEmail = (listing) => {
		if (listing.hasOwnProperty('bizemail'))
		{
			var stry = "mailto:" + listing.bizemail;
			return (
				<div><a href={stry}>{listing.bizemail}</a></div>
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
			<div className="d-flex flex-row m-5">
				<div className="justify-content-right m-6">
					<CardDeck>{businessListings}</CardDeck>
				</div>
			</div>
		);
	}

}

Browse.propTypes = {
	gatherListings: PropTypes.func.isRequired
};


export default connect(
	{gatherListings}
)(Browse);