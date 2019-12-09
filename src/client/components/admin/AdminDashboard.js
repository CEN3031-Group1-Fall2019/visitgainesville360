import React from 'react';
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {CardDeck, Card, Button, Row, Col} from "react-bootstrap";

class AdminDashboard extends React.Component {
	businessCard = () => {
		return (
			<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
				Some quick example text to build on the card title and make up the bulk of
				the card's content.
				</Card.Text>
				<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
					<Button style={{flex:'1'}} variant="success"><FontAwesomeIcon icon={faThumbsUp}/></Button>
					<Button style={{flex:'1'}} variant="danger"><FontAwesomeIcon icon={faThumbsDown}/></Button>
					<Button style={{flex:'1'}} variant="info"><FontAwesomeIcon icon={faInfoCircle}/></Button>
				</div>
			</Card.Body>
			</Card>
		)
	}
	userCard = () => {
		return (
			<Card style={{ width: '18rem' }}>
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