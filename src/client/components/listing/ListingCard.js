import React from 'react';
import {connect} from "react-redux";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import AdminControls from '../admin/AdminControls';
import InfoControl from '../listing/InfoControl';
import moment from 'moment';

class ListingCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentListing: {},
			stateSet: false,
			isAdmin: false
		};
	}

	adminControls() {
		if (this.props.login.user.isAdmin) {
			return (
				//<div className="flex-row justify-content-center">	
				<div>
						<AdminControls
							{...this.props}
							currentListing={this.state.currentListing} />
				</div>);
		}
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

	renderEmail = () => {
		if (this.state.currentListing.hasOwnProperty('bizemail'))
		{
			var stry = "mailto:" + this.state.currentListing.bizemail;
			return (
				<div><a href={stry}>{this.state.currentListing.bizemail}</a></div>
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
			const {currentListing} = this.props;
			this.setState({
				currentListing: currentListing,
				stateSet: true
			});
		}
		console.log("The current listing: ", this.state.currentListing);

		if(this.state.stateSet) {
			return (
				//<div className="card-browse">
				<div>
				<Card className="preview-card">
				<Link
				to={`/listing/${this.state.currentListing._id}`}>
					<Card.Img 
						variant="top" 
						src={this.state.currentListing.image} 
						className="preview-img" />
				</Link>
				<Card.Body>
						<Card.Title>{this.state.currentListing.title ? this.state.currentListing.title : ''}</Card.Title>
						<Card.Text>{this.state.currentListing.phone ? this.state.currentListing.phone : ''}</Card.Text>
						<Card.Text>{this.state.currentListing.phone ? this.state.currentListing.phone : ''}
							{this.renderEmail()}</Card.Text>
						<Card.Text>{this.state.currentListing.address ? this.state.currentListing.address : ''}<br />
						{this.state.currentListing.city ? this.state.currentListing.city+', ' : ''}
						{this.state.currentListing.state ? this.state.currentListing.state : ''}{' '}
						{this.state.currentListing.zip ? this.state.currentListing.zip : ''}</Card.Text>
						<Card.Text>{this.state.currentListing.description ? this.state.currentListing.description : ''}</Card.Text>
					<Card.Text>{this.renderTags()}</Card.Text>
					<Card.Text>{this.renderHours(this.state.currentListing.hours)}</Card.Text>
					<div className="d-flex justify-content-center">
					<AdminControls
						{...this.props}
						currentListing={this.state.currentListing} />
					</div>
				</Card.Body>
				</Card>
				</div>);
		}
		return null;
	}
}

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps
)(ListingCard);