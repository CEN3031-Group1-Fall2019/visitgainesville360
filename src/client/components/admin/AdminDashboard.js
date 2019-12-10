import React from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {CardDeck, Card, Button} from "react-bootstrap";

class AdminDashboard extends React.Component {
	businessCard = () => {
		return (
			<Card>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
				Some quick example text to build on the card title and make up the bulk of
				the card's content.
				</Card.Text>
				<div className="flex flex-center flex-children">
					<Button variant="success"><FontAwesomeIcon icon={faThumbsUp}/></Button>
					<Button variant="danger"><FontAwesomeIcon icon={faThumbsDown}/></Button>
					<Button variant="info"><FontAwesomeIcon icon={faInfoCircle}/></Button>
				</div>
			</Card.Body>
			</Card>
		)
	}
	userCard = () => {
		return (
			<Card>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
				Some quick example text to build on the card title and make up the bulk of
				the card's content.
				</Card.Text>
				<Button variant="info"><FontAwesomeIcon icon={faInfoCircle}/></Button>
			</Card.Body>
			</Card>
		)
	}

	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		return (
			<div className="container">
				<p className="page-header">Overview of Recent Acitity</p>
				<hr />
				<p className="sub-header">Listing Requests</p>
				<CardDeck>
					<this.businessCard />
					<this.businessCard />
					<this.businessCard />
				</CardDeck>
				<hr />
				<p className="sub-header">New Users</p>
				<CardDeck>
					<this.userCard />
					<this.userCard />
					<this.userCard />
				</CardDeck>
        	</div>
		);
	}
}

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps
)(AdminDashboard);