import React from 'react';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import "react-datepicker/dist/react-datepicker.css";
import {Form, Col, Row } from 'react-bootstrap';
import {createListing} from "../../actions/listing.actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class CreateListing extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleTimeChange=this.handleTimeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.selectTime = this.selectTime.bind(this);
        this.state = {
            listingTitle: '',
            listingDescription: '',
            listingEmail: '',
            listingTypeTag: '',
            listingLocTag: '',
            listingAddress: '',
            listingCity: '',
            listingPhone: '',
            listingHours: {
                Monday: {
                    startTime: new Date(),
                    endTime: new Date()
                },
                Tuesday: {
                    startTime: new Date(),
                    endTime: new Date()
                },
                Wednesday: {
                    startTime: new Date(),
                    endTime: new Date()
                },
                Thursday: {
                    startTime: new Date(),
                    endTime: new Date()
                },
                Friday: {
                    startTime: new Date(),
                    endTime: new Date()
                },
                Saturday: {
                    startTime: new Date(),
                    endTime: new Date()
                },
                Sunday: {
                    startTime: new Date(),
                    endTime: new Date()
                }
            },
            listingImage: ''
        };
    }

    handleSubmit (event) {
		event.preventDefault();
		console.log("You are: ", this.props.login.user);
        const listing = {
			email: this.props.login.user.email,
            title: this.state.listingTitle,
            bizemail: this.state.listingEmail,
            typetag: this.state.listingTypeTag,
            loctag: this.state.listingLocTag,
            description: this.state.listingDescription,
			address: this.state.listingAddress,
			city: this.state.listingCity,
			phone: this.state.listingPhone,
			state: this.state.listingState,
			zip: this.state.listingZip,
            hours: this.state.listingHours,
            image: this.state.listingImage
        };
		console.log("Adding listing:", listing);
		this.props.createListing(listing);
		this.props.history.push("/");
    };
    onChangeHandler (event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };
    handleTimeChange = (day, open_close, time) => {
        this.setState({
            listingHours:
                {...this.state.listingHours,
                    [day]: {
                        ...this.state.listingHours[day],
                        [open_close]: time}}
        });
	};
	selectTime(isOpenOrClose) {
		var listOfDates = [];
		var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

		for(let day of weekdays) {
			listOfDates.push(
				<div>
					<Form.Group as={Col}>
					<Form.Label>{day}</Form.Label>
					<Form.Control  
						size='sm'
						type="time"
						onChange= { e => this.handleTimeChange({day}, {isOpenOrClose}, e) }
						placeholder="09:30 AM" />
					</Form.Group>
				</div>
			);
		}
		return listOfDates;
	};

    render() {
		if (!this.props.login.isLoggedIn) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

        return (
			<div>
			<p className="page-header">Add a Listing</p>
			<div className="flex">

				<div className="container">
			<Form onSubmit={this.handleSubmit}>	
				<div className="Row">
				<Form.Group controlId="formGridAddress1">
					<Form.Label>Business Name</Form.Label>
					<Form.Control
						name='listingTitle'
						onChange={this.onChangeHandler}
						value =  {this.state.listingTitle}
						placeholder="Your Businesses' Name" />
				</Form.Group>
				</div>
				<div className="Row">
				<Form.Group controlId="formBizMail">
					<Form.Label>Business Email (Public)</Form.Label>
					<Form.Control
						name='listingEmail'
						onChange={this.onChangeHandler}
						value =  {this.state.listingEmail}
						placeholder="Businesses' Public Email Address" />
				</Form.Group>
				</div>
				<div className="Row">
				<Form.Group controlId="formGridAddress">
					<Form.Label>Address</Form.Label>
					<Form.Control
						name='listingAddress'
						onChange={this.onChangeHandler}
						value =  {this.state.listingAddress}
						placeholder="1234 Main St" />
				</Form.Group>
				</div>
				<div className="Row">
				<Form.Group controlId="formGridPhone">
					<Form.Label>Phone</Form.Label>
					<Form.Control
						type='phone'
						name='listingPhone'
						onChange={this.onChangeHandler}
						value =  {this.state.listingPhone}
						placeholder="123-456-7890" />
				</Form.Group>
				</div>
				<div className="Row">
				<Form.Row>
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>City</Form.Label>
						<Form.Control 
						name='listingCity'
						onChange={this.onChangeHandler}
						value =  {this.state.listingCity}
						placeholder="Gainesville" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>State</Form.Label>
						<Form.Control
						as="select"
						name='listingState'
						onChange={this.onChangeHandler}
						value =  {this.state.listingState}>
							<option>Choose...</option>
							<option value="AL">AL</option>
							<option value="AK">AK</option>
							<option value="AR">AR</option>	
							<option value="AZ">AZ</option>
							<option value="CA">CA</option>
							<option value="CO">CO</option>
							<option value="CT">CT</option>
							<option value="DC">DC</option>
							<option value="DE">DE</option>
							<option value="FL">FL</option>
							<option value="GA">GA</option>
							<option value="HI">HI</option>
							<option value="IA">IA</option>	
							<option value="ID">ID</option>
							<option value="IL">IL</option>
							<option value="IN">IN</option>
							<option value="KS">KS</option>
							<option value="KY">KY</option>
							<option value="LA">LA</option>
							<option value="MA">MA</option>
							<option value="MD">MD</option>
							<option value="ME">ME</option>
							<option value="MI">MI</option>
							<option value="MN">MN</option>
							<option value="MO">MO</option>	
							<option value="MS">MS</option>
							<option value="MT">MT</option>
							<option value="NC">NC</option>	
							<option value="NE">NE</option>
							<option value="NH">NH</option>
							<option value="NJ">NJ</option>
							<option value="NM">NM</option>			
							<option value="NV">NV</option>
							<option value="NY">NY</option>
							<option value="ND">ND</option>
							<option value="OH">OH</option>
							<option value="OK">OK</option>
							<option value="OR">OR</option>
							<option value="PA">PA</option>
							<option value="RI">RI</option>
							<option value="SC">SC</option>
							<option value="SD">SD</option>
							<option value="TN">TN</option>
							<option value="TX">TX</option>
							<option value="UT">UT</option>
							<option value="VT">VT</option>
							<option value="VA">VA</option>
							<option value="WA">WA</option>
							<option value="WI">WI</option>	
							<option value="WV">WV</option>
							<option value="WY">WY</option>
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>Zip</Form.Label>
						<Form.Control
							name='listingZip'
							onChange={this.onChangeHandler}
							value =  {this.state.listingZip}
							placeholder="32601"  />
					</Form.Group>
				</Form.Row>
				</div>
				<div className="Row">
				<Form.Row>	
					<Form.Group as={Col} controlId="formTags">
						<Form.Label>Business Type Tag</Form.Label>
						<Form.Control
							name='listingTypeTag'
							onChange={this.onChangeHandler}
							value =  {this.state.listingTypeTag}
							placeholder="Restaurant/Bank/etc." />
					</Form.Group>
					<Form.Group as={Col} controlId="formTags">
						<Form.Label>Business Location Tag</Form.Label>
						<Form.Control
							name='listingLocTag'
							onChange={this.onChangeHandler}
							value =  {this.state.listingLocTag}
							placeholder="Downtown/Butler Plaza/etc." />
					</Form.Group>
				</Form.Row>
				</div>
				<div className="row">
				<Form.Label>Business Hours</Form.Label>
				</div>
				<Form.Row as={Col}>
					<Form.Label>Open</Form.Label>
					<Form.Group as={Row} controlId="formGridOpenHours">
						<this.selectTime
							isOpenOrClose="startTime" />
					</Form.Group>
					<Form.Label>Close</Form.Label>
					<Form.Group as={Row} controlId="formGridCloseHours">
						<this.selectTime isOpenOrClose="endTime" />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridDescription">
						<Form.Label>Description</Form.Label>
						<Form.Control 
							as="textarea" 
							rows="3"
							name='listingDescription'
							onChange={this.onChangeHandler}
							value =  {this.state.listingDescription}
							placeholder="Describe your business here" />
					</Form.Group>
				</Form.Row >
				<Form.Row>
					<Form.Group as={Col} controlId="formGridImage">
						<Form.Label>Upload an Image</Form.Label>
						<Form.Control 
							style={{backgroundColor:"#FFF", color:"#000"}}
							type="file"
							name='listingImage'
							onChange={this.onChangeHandler}
							value = {this.state.listingImage} />
					</Form.Group>
				</Form.Row>
				<button className="button button-background">Submit</button>
			</Form>
			</div>
			</div>
			</div>);
    }
}

CreateListing.propTypes = {
	createListing: PropTypes.func.isRequired
};
  
const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{createListing}
)(CreateListing);