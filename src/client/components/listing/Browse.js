import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAllListings} from "../../actions/listing.actions";
import {CardDeck, Card, Button} from "react-bootstrap";

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

	renderListings = () => {
		var listOfLists = [];

		for(let listing of Object.values(this.props.listing.browseListing)) {
			if(listing.isPosted) {
				listOfLists.push(
					<Card style={{ width: '30rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>{listing.title}</Card.Title>
						<Card.Text>{listing.phone}</Card.Text>
						<Card.Text>{listing.address}<br />
						{listing.city}, {listing.state} {listing.zip}</Card.Text>
						<Card.Text>{listing.description}</Card.Text>
					</Card.Body>
					</Card>);
			}
		}
		console.log("the lists", listOfLists);
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