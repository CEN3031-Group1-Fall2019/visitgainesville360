import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {CardDeck} from "react-bootstrap";
import {gatherListings, foundListings} from "../../actions/listing.actions";
import moment from 'moment';
import ListingCard from '../listing/ListingCard';


class Browse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			browseListings: []
		};
	}

	componentDidMount() {
		this.props.gatherListings({isApproved: true, isDenied: false})
		.then(res => {
			this.setState({
				browseListings: foundListings
			})
		})
		.catch(err => {
			console.log("Error while getting the listings");
			console.log(err);
		});
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
			if(listing.isApproved && !listing.isDenied) {
				businessListings.push(<ListingCard 
					currentListing={listing} />);
			}
		}

		return (
			<div className="d-flex justify-content-center">
				<div className="page-container d-flex justify-content-center">
					<div className="jumbotron">
					<CardDeck>{businessListings}</CardDeck>
				</div>
			</div>
			</div>
		);
	}

}

Browse.propTypes = {
	gatherListings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{gatherListings}
)(Browse);