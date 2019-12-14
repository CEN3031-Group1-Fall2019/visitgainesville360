import React from 'react';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import "react-datepicker/dist/react-datepicker.css";
import {Form} from 'react-bootstrap';
import {deleteListing} from "../../actions/listing.actions";
import Axios from "axios";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class DeleteListing extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            bizName: '',
            browseListings: ''
        };
    }

    handleSubmit (event) {
		event.preventDefault();
		console.log("You are: ", this.props.login.user);
        const listy = {
			email: this.props.login.user.email,
            name: this.state.bizName
        };
		console.log("Deleting biz:", listy);
		this.props.deleteListing(listy);
		this.props.history.push("/");
    };

    onChangeHandler (event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };

	componentDidMount() {
		Axios
		.post("/listings/browse")
		.then(res => {
			this.setState({
				browseListings: res.data
			});
		})
		.catch(err => {
			console.log("Error getting all listings");
			console.log(err);
		});
	}

	businessCard = listing => {
		if(listing.email === this.props.login.user.email) {
              return(<option value={listing.title}>{listing.title}</option>);
        }
    }

    render() {
		if (!this.props.login.isLoggedIn) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}
		
		var businessListings = [];

		for(let listing of Object.values(this.state.browseListings)) 
		{
			businessListings.push(this.businessCard(listing));
		}

        return (
			<div className="d-flex justify-content-center">
				<div className="page-container d-flex justify-content-center">
					<div className="jumbotron">
				<p className="display-1">Delete Listing</p>
			<div style={{ display: 'flex', width: '100%'}}>
			<div style={{ width: '50%', margin: 'auto' }}>
			<Form onSubmit={this.handleSubmit}>	
				<Form.Group controlId="formTitleDropDown">
					<Form.Label>Select Business</Form.Label>
					<Form.Control
						as="select"
						name='bizName'
						onChange={this.onChangeHandler}
						value =  {this.state.bizName}>
							<option value="">Select...</option>
							{businessListings}
					</Form.Control>
				</Form.Group>
					
				<button className="btn btn-info">>Delete</button>
			</Form>
			</div>
			</div>
			</div>
			</div>
			</div>);
    }
}

DeleteListing.propTypes = {
	deleteListing: PropTypes.func.isRequired
};
  
const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{deleteListing}
)(DeleteListing);
