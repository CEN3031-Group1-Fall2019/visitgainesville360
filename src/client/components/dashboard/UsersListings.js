import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {CardDeck} from "react-bootstrap";
import {gatherListings, foundListings} from "../../actions/listing.actions";
import {gatherUsers, foundUsers} from "../../actions/admin.actions";
import moment from 'moment';
import ListingCard from '../listing/ListingCard';


class UsersListings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: '',
			browseListings: [],
			setState: false
		};
	}

	componentDidMount() {
		if (this.setState) {
			this.props.gatherListings({email: this.state.currentUser.email})
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
		if(!this.state.stateSet) {
			var pathname = this.props.location.pathname;
			var userId = pathname.substring(pathname.lastIndexOf("/") + 1);

			this.props.gatherUsers({'_id': userId})
			.then(res => {
				console.log("Mounted users", foundUsers)
				this.setState({
					currentUser: foundUsers[0],
					stateSet: true
				});
			})
			.catch(err => {
				console.log("Error in componentDidMount while retrieving all users");
				console.log(err);
			});
			return <p>Finding Listings</p>
		} else {
			var businessListings = [];
			for(let listing of Object.values(this.state.browseListings)) {
				if(listing.email == this.state.currentUser.email) {
					businessListings.push(<div><ListingCard 
						currentListing={listing} />
						<p>Approved: {listing.isApproved}</p></div>);
				}
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
}

UsersListings.propTypes = {
	gatherListings: PropTypes.func.isRequired,
	gatherUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{gatherListings, gatherUsers}
)(UsersListings);