import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {CardDeck} from "react-bootstrap";
import {gatherListings, foundListings} from "../../actions/listing.actions";
import ListingCard from '../listing/ListingCard';

class AdminListings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			browseListings: []
		};
	}

	componentDidMount() {
		this.props.gatherListings({isApproved: false, isDenied: false})
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
				console.log("Admin listnigs is being called");
			this.props.gatherListings({isApproved: false, isDenied: false})
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
			if(!listing.isApproved && !listing.isDenied) {
				businessListings.push(<ListingCard 
					currentListing={listing} />);
			}
		}

		return (
			<div className="d-flex justify-content-center">
				<div className="page-container d-flex justify-content-center">
					<div className="jumbotron">
				<p className="display-1">Overview of Recent Acitity</p>
				<hr />
				<CardDeck className="row">{businessListings}</CardDeck>
        	</div>
        	</div>
        	</div>
		);
	}
}

AdminListings.propTypes = {
	gatherListings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{gatherListings}
)(AdminListings);