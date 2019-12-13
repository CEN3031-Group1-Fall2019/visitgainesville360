import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {CardDeck} from "react-bootstrap";
import {gatherListings, foundListings} from "../../actions/listing.actions";
import ListingCard from '../listing/ListingCard';

class AdminDenied extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			browseListings: ''
		};
	}

	componentDidMount() {
		this.props.gatherListings({isDenied: true})
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

	componentDidUpdate(prevState) {
		if (this.state.browseListing !== undefined
			&& prevState.browseListings !== this.state.browseListings) {
			this.props.gatherListings({isDenied: true})
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

	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		var businessListings = [];
		for(let listing of Object.values(this.state.browseListings)) {
			if(listing.isDenied) {
				businessListings.push(<ListingCard 
					currentListing={listing} />);
			}
		}

		return (
			<div className="container listings">
				<p className="page-header">Overview of Denied Listings</p>
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