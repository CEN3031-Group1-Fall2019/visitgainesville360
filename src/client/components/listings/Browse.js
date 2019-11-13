import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAllListings} from "../../actions/listing.actions";

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
		console.log("DOING RENDER OF LIST");
		var listOfLists = [];

		for(let listing of Object.values(this.props.listing.browseListing)) {
			console.log(listing.title);
			console.log(listing.address);
			listOfLists.push(<div className="col-lg-4">
				<ul class="list-group">
					<li class="list-group-item">{listing.title}</li>
					<li class="list-group-item">{listing.address}, Gainesville, {listing.state} {listing.zip}</li>
					<li class="list-group-item">{listing.phone}</li>
					<li class="list-group-item">{listing.description}</li>
				</ul>
			</div>);
		}
		console.log("the lists", listOfLists);
		return listOfLists;
	}

	render() {
		if(!this.state.hasListings) {
			this.props.getAllListings();
		}
		console.log("The render", this.props.listing.browseListing);
		return (
			<div className="d-flex justify-content-center p-5"><this.renderListings /></div>
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