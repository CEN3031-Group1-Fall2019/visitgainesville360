import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Card} from "react-bootstrap";
import {gatherListings, foundListings} from "../../actions/listing.actions";
import AdminControls from '../admin/AdminControls';
import moment from 'moment';

class ViewListing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentListing: '',
			stateSet: false,
			isAdmin: false
		};
	}

	componentDidMount() {
		this.setState({
			isAdmin: this.props.login.user.isAdmin
		})

		var pathname = this.props.location.pathname;
		var listingId = pathname.substring(pathname.lastIndexOf("/") + 1);

		this.props.gatherListings({_id: listingId})
		.then(res => {
			this.setState({
				currentListing: foundListings[0],
				stateSet: true
			})
		})
		.catch(err => {
			console.log("Error while getting the listing", listingId);
			console.log(err);
		});
	}

	adminControls() {
		if (this.props.login.user.isAdmin) {
			return (
				<div className="flex-row justify-content-center">	
						<AdminControls
							{...this.props}
							currentListing={this.state.currentListing} />
				</div>);
		}
	}

	renderImg() {
		return(
			<Card.Img variant="top" src={this.state.currentListing.image} className="listing-img"/>
		);
	}

	renderTags = () => {
		if (this.state.currentListing.hasOwnProperty('typetag') || this.state.currentListing.hasOwnProperty('loctag'))
		{
			return (
				<div>
					Tags: {this.state.currentListing.typetag} {this.state.currentListing.loctag}
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
		console.log("The current listing: ", this.state.currentListing);
		if(this.state.stateSet) {
			return (
				<div className="d-flex flex-row justify-content-center">
					<div className="card-view m-4">
						<Card>
							{this.state.currentListing.image ? this.renderImg() : ''}
						<div className="card-body">
						<Card.Body>
							<Card.Title>{this.state.currentListing.title ? this.state.currentListing.title : ''}</Card.Title>
							<Card.Text>{this.state.currentListing.phone ? this.state.currentListing.phone : ''}</Card.Text>
							<Card.Text>{this.state.currentListing.address ? this.state.currentListing.address : ''}<br />
							{this.state.currentListing.city ? this.state.currentListing.city+', ' : ''}
							{this.state.currentListing.state ? this.state.currentListing.state : ''}{' '}
							 {this.state.currentListing.zip ? this.state.currentListing.zip : ''}</Card.Text>
							<Card.Text>{this.state.currentListing.description ? this.state.currentListing.description : ''}</Card.Text>
							<Card.Text>{this.renderTags()}</Card.Text>
							<Card.Text>{this.renderHours(this.state.currentListing.hours)}</Card.Text>
							{this.adminControls()}
						</Card.Body></div>
						</Card>
					</div>
				</div>
			);
		}
		else return null;
	}
}

ViewListing.propTypes = {
	gatherListings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{gatherListings}
)(ViewListing);