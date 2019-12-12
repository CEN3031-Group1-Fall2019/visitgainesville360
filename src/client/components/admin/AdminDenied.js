import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {CardDeck, Card} from "react-bootstrap";
import {gatherListings} from "../../actions/listing.actions";
import AdminControls from './AdminControls';
import InfoControl from '../listing/InfoControl';

const query = {
	isDenied: true
}

class AdminDenied extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			browseListings: ''
		};
	}

	componentDidMount() {
		this.props.gatherListings(query, function(res) {
			this.setState({
				browseListings: res.data
			});
		});
	}

	componentDidUpdate(prevState) {
		if (prevState.browseListings !== this.state.browseListings) {
			this.props.gatherListings(query, function(res) {
				this.setState({
					browseListings: res.data
				});
			});
		}
	}

	businessCard = listing => {
		if(!listing.isApproved && !listing.isDenied) {
			return(
				<div className="m-2 card-browse">
				<Card>
				<Card.Img variant="top" src={listing.image}  className="card-img"/>
				<div className="card-body">
				<Card.Body>
						<Card.Title>{listing.title ? listing.title : ''}</Card.Title>
						<Card.Text>{listing.phone ? listing.phone : ''}</Card.Text>
						<Card.Text>{listing.address ? listing.address : ''}<br />
						{listing.city ? listing.city+', ' : ''}
						{listing.state ? listing.state : ''}{' '}
						 {listing.zip ? listing.zip : ''}</Card.Text>
					<div className="d-flex flex-row justify-content-center align-items-end">
					<AdminControls
						{...this.props}
						currentListing={listing} />
					<InfoControl
						{...this.props}
						currentListing={listing} />
					</div>
				</Card.Body></div>
				</Card>
				</div>
			)
		} else return null;
	}

	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		var businessListings = [];
		for(let listing of Object.values(this.state.browseListings)) {
			businessListings.push(this.businessCard(listing));
		}

		return (
			<div className="container listings">
				<p className="sub-header">Overview of Denied Listings</p>
				<CardDeck className="row">{businessListings}</CardDeck>
        	</div>
		);
	}
}

AdminDenied.propTypes = {
	gatherListings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{gatherListings}
)(AdminDenied);