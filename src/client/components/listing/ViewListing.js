import React from 'react';
import {connect} from "react-redux";
import {Card} from "react-bootstrap";
import AdminControls from '../admin/AdminControls';
import Axios from "axios";

class ViewListing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentListing: '',
			stateSet: false
		};
	}

	componentDidMount() {
		var pathname = this.props.location.pathname;
		var listingId = pathname.substring(pathname.lastIndexOf("/") + 1);;
		console.log("this is it", listingId);

		Axios
		.post("/listings/get", {id: listingId})
		.then(res => {
			this.setState({
				currentListing: res.data,
				stateSet: true
			})
		})
		.catch(err => {
			console.log("Error getting all listings");
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

	render() {
		console.log("The current listing: ", this.state.currentListing);
		return (
			<div className="d-flex flex-row justify-content-center">
				<div className="card-view m-4">
					<Card>
					<Card.Img variant="top" src={this.state.currentListing.image} className="listing-img"/>
					<div className="card-body">
					<Card.Body>
						<Card.Title>{this.state.currentListing.title}</Card.Title>
						<Card.Text>{this.state.currentListing.phone}</Card.Text>
						<Card.Text>{this.state.currentListing.address}<br />
						{this.state.currentListing.city}, {this.state.currentListing.state} {this.state.currentListing.zip}</Card.Text>
						<Card.Text>{this.state.currentListing.description}</Card.Text>
						{this.adminControls()}
					</Card.Body></div>
					</Card>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps
)(ViewListing);