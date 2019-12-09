import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAllListings} from "../../actions/listing.actions";
import {CardDeck, Card, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

class Browse extends React.Component {
	constructor() {
		super();
		this.state = {
			hasListings: false
		};
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.listing.isPosted) {
			this.setState({hasListings: true});
		}
	}

	renderHours = (hours) => {
		return (
			<div>
				Monday: {moment(hours.Monday.startTime).format('hh:mm a')} - {moment(hours.Monday.endTime).format('hh:mm a')} <br />
				Tuesday: {moment(hours.Tuesday.startTime).format('hh:mm a')} - {moment(hours.Tuesday.endTime).format('hh:mm a')} <br />
				Wednesday: {moment(hours.Wednesday.startTime).format('hh:mm a')} - {moment(hours.Wednesday.endTime).format('hh:mm a')} <br />
				Thursday: {moment(hours.Thursday.startTime).format('hh:mm a')} - {moment(hours.Thursday.endTime).format('hh:mm a')} <br />
				Friday: {moment(hours.Friday.startTime).format('hh:mm a')} - {moment(hours.Friday.endTime).format('hh:mm a')} <br />
				Saturday: {moment(hours.Saturday.startTime).format('hh:mm a')} - {moment(hours.Saturday.endTime).format('hh:mm a')} <br />
				Sunday: {moment(hours.Sunday.startTime).format('hh:mm a')} - {moment(hours.Sunday.endTime).format('hh:mm a')}
			</div>
		);
	}

	renderListings = () => {
		var listOfLists = [];

		for(let listing of Object.values(this.props.listing.browseListing)) {
			if(listing.isApproved) {
				listOfLists.push(
					<Card border="dark" style={{ width: '30rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>{listing.title}</Card.Title>
						<Card.Text>{listing.phone}</Card.Text>
						<Card.Text>{listing.address}<br />
						{listing.city}, {listing.state} {listing.zip}</Card.Text>
						<Card.Text>{listing.description}</Card.Text>
						<Card.Text>{this.renderHours(listing.hours)}</Card.Text>
						<Button variant="info"><FontAwesomeIcon icon={faInfoCircle}/></Button>
					</Card.Body>
					</Card>);
			}
		}
		return listOfLists;
	}

	render() {
		if(!this.state.hasListings) {
			this.props.getAllListings();
		}
		return (
			<div className="d-flex justify-content-center p-5">
				<CardDeck><this.renderListings /></CardDeck>
			</div>
		);
	}

}

Browse.propTypes = {
	getAllListings: PropTypes.func.isRequired,
	listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	listing: state.listing
});

export default connect(
	mapStateToProps,
	{getAllListings}
)(Browse); 