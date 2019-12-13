import React from 'react';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import "react-datepicker/dist/react-datepicker.css";
import {Form, Col } from 'react-bootstrap';
import {createTags} from "../../actions/listing.actions";
import Axios from "axios";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class CreateTags extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            bizName: '',
            bizTypeTag: '',
            bizLocTag: '',
            browseListings: ''
        };
    }

    handleSubmit (event) {
		event.preventDefault();
		console.log("You are: ", this.props.login.user);
        const tagging = {
			email: this.props.login.user.email,
            name: this.state.bizName,
            typetag: this.state.bizTypeTag,
            loctag: this.state.bizLocTag
        };
		console.log("Adding tags:", tagging);
		this.props.createTags(tagging);
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
			<div>
			<p className="page-header">Add Tags</p>
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
				<Form.Row>	
					<Form.Group as={Col} controlId="formTags">
						<Form.Label>Business Type Tag</Form.Label>
						<Form.Control
							name='bizTypeTag'
							onChange={this.onChangeHandler}
							value =  {this.state.bizTypeTag}
							placeholder="Restaurant/Bank/etc." />
					</Form.Group>
					<Form.Group as={Col} controlId="formTags">
						<Form.Label>Business Location Tag</Form.Label>
						<Form.Control
							name='bizLocTag'
							onChange={this.onChangeHandler}
							value =  {this.state.bizLocTag}
							placeholder="Downtown/Butler Plaza/etc." />
					</Form.Group>
				</Form.Row>
					
				<button className="button button-background">Submit</button>
			</Form>
			</div>
			</div>
			</div>);
    }
}

CreateTags.propTypes = {
	createTags: PropTypes.func.isRequired
};
  
const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{createTags}
)(CreateTags);
