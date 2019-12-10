import React from 'react';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import {Form, Col, Row } from 'react-bootstrap';
import {createListing} from "../../actions/listing.actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";


import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';


class CreateListing extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleTimeChange=this.handleTimeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.selectTime = this.selectTime.bind(this);
		const now = moment().hour(0).minute(0);
        this.state = {
            listingTitle: '',
            listingDescription: '',
            listingAddress: '',
            listingCity: '',
            listingPhone: '',
            listingHours: {
				Monday: {
					o: now,
					c: now
				},
				Tuesday: {
					o: now,
					c: now
				},
				Wednesday: {
					o: now,
					c: now
				},
				Thursday: {
					o: now,
					c: now
				},
				Friday: {
					o: now,
					c: now
				},
				Saturday: {
					o: now,
					c: now
				},
				Sunday: {
					o: now,
					c: now
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
		console.log(listing);
		this.props.createListing(listing);
    };
    onChangeHandler (event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };
	handleTimeChange = (value, id) => {
		var open_close = id[0];
		var day = id.substring(1);
		console.log(value);
		var time = value.format('h:mm a');
		console.log("time change detected");
		console.log(open_close);
		console.log(day);
		console.log(time);
		this.setState({
			listingHours:
				{...this.state.listingHours,
					[day]: {
						...this.state.listingHours[day],
						[open_close]: time}}
		});
	};
	selectTime(isOpenOrClose) {
		console.log(isOpenOrClose);
		var listOfDates = [];
		var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

		for(let day of weekdays) {
			listOfDates.push(
				<div>
					<Form.Group as={Col}>
					<Form.Label>{day}</Form.Label>
					<TimePicker
						defaultValue={this.state.listingHours[day][isOpenOrClose.isOpenOrClose]}
						id = {isOpenOrClose.isOpenOrClose+day}
						onChange={(value, id=isOpenOrClose.isOpenOrClose+day) => this.handleTimeChange(value, id)}
						format='h:mm a'
						use12Hours
						showSecond={false}
					/>
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
			<div style={{ display: 'flex', width: '100%'}}>

				<div style={{ width: '50%', margin: 'auto' }}>
			<Form onSubmit={this.handleSubmit}>	
				<Form.Group controlId="formGridAddress1">
					<Form.Label>Business Name</Form.Label>
					<Form.Control
						name='listingTitle'
						onChange={this.onChangeHandler}
						value =  {this.state.listingTitle}
						placeholder="Your Businesses' Name" />
				</Form.Group>
				<Form.Group controlId="formGridAddress">
					<Form.Label>Address</Form.Label>
					<Form.Control
						name='listingAddress'
						onChange={this.onChangeHandler}
						value =  {this.state.listingAddress}
						placeholder="1234 Main St" />
				</Form.Group>
				<Form.Group controlId="formGridPhone">
					<Form.Label>Phone</Form.Label>
					<Form.Control
						type='phone'
						name='listingPhone'
						onChange={this.onChangeHandler}
						value =  {this.state.listingPhone}
						placeholder="123-456-7890" />
				</Form.Group>
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
				<Form.Label>Business Hours</Form.Label>
				<Form.Row as={Col}>
					<Form.Label>Open</Form.Label>
					<Form.Group as={Row} controlId="formGridOpenHours">
						<this.selectTime isOpenOrClose="o" />
					</Form.Group>
					<Form.Label>Close</Form.Label>
					<Form.Group as={Row} controlId="formGridCloseHours">
						<this.selectTime isOpenOrClose="c" />
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