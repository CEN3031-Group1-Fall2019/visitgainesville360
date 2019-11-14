import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import DatePicker from "react-datepicker";
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import "react-datepicker/dist/react-datepicker.css";
import {createListing} from "../../actions/listing.actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

registerPlugin(FilePondPluginImagePreview);

class CreateListing extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleTimeChange=this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            listingTitle: '',
            listingDescription: '',
            listingAddress: '',
            listingState: '',
            listingZip: '',
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
            files: ''
        };
	}
	
	dates = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    handleSubmit (event) {
		event.preventDefault();
		console.log("Here are your login", this.props.login);
        const listing = {
			email: this.props.login.user.email,
            title: this.state.listingTitle,
            description: this.state.listingDescription,
			address: this.state.listingAddress,
			phone: this.state.listingPhone,
			state: this.state.listingState,
			zip: this.state.listingZip,
            hours: this.state.listingHours,
            files: this.state.files
        };
		console.log("Adding listing:", listing);
		this.props.createListing(listing);
	};
	
    onChangeHandler (event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
	};
	
    handleTimeChange (day, open_close, time) {
        this.setState({
            listingHours:
                {...this.state.listingHours,
                    [day]: {
                        ...this.state.listingHours[day],
                        [open_close]: time}}
        });
	};

	printDates = (dates2) => {
		var date;
		var listOfDates = [];
		listOfDates.push(<div className="col d-flex justify-content-center"></div>);
		for(date of this.dates) {
			listOfDates.push(<div className="col d-flex justify-content-center"><h5>{date}</h5></div>);
		}

		return listOfDates;
	}

	createTimeListings = (e,time) => {
		var listOfDates = [];

		for(let date of this.dates) {
			var altDate = new Date();
			listOfDates.push(
				<div className = "col">
					<DatePicker 
						showTimeSelect
						showTimeSelectOnly
						timeCaption="Time"
						dateFormat="h:mm a" 
						selected={altDate}
						id = {date}
						timeIntervals={15}
						onChange= { e => this.handleTimeChange({date}, {time}, e) }
				/>
				</div>
			);
		}

		return listOfDates;
	}
	
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className = "container">
                    <br/>
                    <p className="page-header">Create a listing</p>
                    <br/>
                    <FilePond
                        allowMultiple={true}
                    />
                    <br/>
                    <br/>
                    <div className = "row">
                        <div className = "col-lg-6">
							<div className = "p-2">
                            <h4>Business Name:</h4>
                            <input
                                type='text'
                                name='listingTitle'
                                onChange={this.onChangeHandler}
                                value =  {this.state.listingTitle}
                            />
							</div>
							<div className = "p-2">
                            <h4>Address:</h4>
                            <input
                                type='text'
                                name='listingAddress'
                                onChange={this.onChangeHandler}
                                value = {this.state.listingAddress}
                            />
							</div>
                        </div>
                        <div className = "col-lg-6">
                            <h4>Description:</h4>
                            <textarea style={{ height: 100 }}
                                      type='text'
                                      name='listingDescription'
                                      onChange={this.onChangeHandler}
                                      value = {this.state.listingDescription}
                            />
                        </div>
                    </div>
                    <div className = "row p-2">
                        <div className = "col-lg-4">
                            <h4>Zip Code:</h4>
                            <input
                                type='text'
                                name='listingZip'
                                onChange={this.onChangeHandler}
                                value = {this.state.listingZip}
                            />
                        </div>
                        <div className = "col-lg-2">
                            <h4>State:</h4>
                            <input
                                type='text'
                                name='listingState'
                                onChange={this.onChangeHandler}
                                value = {this.state.listingState}
                            />
                        </div>
                        <div className = "col-lg-6">
                            <h4>Phone Number:</h4>
                            <input
                                type='text'
                                name='listingPhone'
                                onChange={this.onChangeHandler}
                                value = {this.state.listingPhone}
                            />
                        </div>
                    </div>
                    <h4 className="p-2">Hours of operation:</h4>
                    	<div className = "row p-2">
							<this.printDates 
								key= {this.dates}
							/>
						</div>

                    	<div className = "row p-2">
							<div className="col d-flex justify-content-center"><h4>Open</h4></div>
							<this.createTimeListings
								time="startTime"
							/>
						</div>
                    	<div className = "row p-2">
							<div className="col d-flex justify-content-center"><h4>Close</h4></div>
							<this.createTimeListings
								time="endTime"
							/>
						</div>
                    <br/>
					<div className="row d-flex justify-content-center p-3">
						<button
							type="submit"
							className="button button-background">
								Submit
						</button>
					</div>
                </div>
            </form>
        );
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