import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {gatherListings, foundListings} from "../actions/listing.actions";
import moment from 'moment';
import ListingCard from '../components/listing/ListingCard';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			browseListings: [],
			stateSet: false
		};
	}

	componentDidMount() {
		this.props.gatherListings({isApproved: true, isDenied: false})
		.then(res => {
			this.setState({
				browseListings: foundListings,
				stateSet: true
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
		if(this.state.stateSet) {
			var count = 0;
			var businessListings = [];
			for(let listing of Object.values(this.state.browseListings)) {
				if(listing.isApproved && !listing.isDenied && count < 2) {
					++count;
					businessListings.push(<ListingCard 
						currentListing={listing} />);
				}
			}
	
			return (
				<div className="d-flex justify-content-center">
					<div className="page-container d-flex justify-content-center">
						<div className="jumbotron">
							<p className="display-1">Welcome to Visit Gainesville 360</p>
							<hr className="my-4" />
							<Link to="/browse">
							<div className="d-flex justify-content-center">
								<button
									type="button" 
									className="btn btn-primary" 
									to="/browse">
										Browse Listings
								</button>
							</div>
							</Link>
							<p className="display-4">Featured Listings</p>
							<div className="page-content d-flex flex-row justify-content-center">{businessListings}</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="d-flex flex-row m-5">
					<div className="justify-content-right m-6">
						<p className="page-header">Welcome to Visit Gainesville 360</p>
						<p className="sub-header">Click an item above to get started</p>
					</div>
				</div>
			);
		}
	}

}

LandingPage.propTypes = {
	gatherListings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{gatherListings}
)(LandingPage);