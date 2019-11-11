import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import DatePicker from "react-datepicker";
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import "react-datepicker/dist/react-datepicker.css";
// import '.Form.css';

registerPlugin(FilePondPluginImagePreview);

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleTimeChange=this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            listingTitle: '',
            listingDescription: '',
            listingLocation: '',
            listingEmail: '',
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
    handleSubmit (event) {
        event.preventDefault();
        const listing = {
            listingTitle: this.state.listingTitle,
            listingDescription: this.state.listingDescription,
            listingLocation: this.state.listingLocation,
            listingHours: this.state.listingHours,
            files: this.state.files
        };
        console.log(listing);
        // window.location = '/';
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
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className = "container">
                    <br/>
                    <h1>Create a listing for your business</h1>
                    <br/>
                    <div className = "row">
                        <div className = "col-lg-6">
                            <h4>Business name:</h4>
                            <input
                                type='text'
                                name='listingTitle'
                                onChange={this.onChangeHandler}
                                value =  {this.state.listingTitle}
                            />
                            <h4>Location:</h4>
                            <input
                                type='text'
                                name='listingLocation'
                                onChange={this.onChangeHandler}
                                value = {this.state.listingLocation}
                            />
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
                    <div className = "row">
                        <div className = "col-lg-6">
                            <h4>Contact email:</h4>
                            <input
                                type='text'
                                name='listingLocation'
                                onChange={this.handleEmailChange}
                                value = {this.state.listingEmail}
                            />
                        </div>
                        <div className = "col-lg-6">
                            <h4>Confirm email:</h4>
                            <input
                                type='text'
                                name='listingLocation'
                                onChange={this.handleEmailChange}
                                value = {this.state.listingEmail}
                            />
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-lg-6">
                            <h4>Phone number:</h4>
                            <input
                                type='text'
                                name='listingLocation'
                                onChange={this.onChangeHandler}
                                value = {this.state.listingLocation}
                            />
                        </div>
                        <div className = "col-lg-6">
                            <h4>Placeholder</h4>
                            <input
                                type='text'
                                name='listingLocation'
                                onChange={this.onChangeHandler}
                                value = {this.state.listingLocation}
                            />
                        </div>
                    </div>
                    <h4>Hours of operation:</h4>
                    <div className = "row">
                        <div className = "col">
                            <h5>Mon</h5>
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Monday.startTime} onChange={ e => this.handleTimeChange("Monday", "startTime", e) } />
                        </div>
                        <div className = "col">
                            <h5>Tues</h5>
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Tuesday.startTime} onChange={ e => this.handleTimeChange("Tuesday", "startTime", e) } />
                        </div>
                        <div className = "col">
                            <h5>Wed</h5>
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Wednesday.startTime} onChange={ e => this.handleTimeChange("Wednesday", "startTime", e) } />
                        </div>
                        <div className = "col">
                            <h5>Thurs</h5>
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Thursday.startTime} onChange={ e => this.handleTimeChange("Thursday", "startTime", e) } />
                        </div>
                        <div className = "col">
                            <h5>Fri</h5>
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Friday.startTime} onChange={ e => this.handleTimeChange("Friday", "startTime", e) } />
                        </div>
                        <div className = "col">
                            <h5>Sat</h5>
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Saturday.startTime} onChange={ e => this.handleTimeChange("Saturday", "startTime", e) } />
                        </div>
                        <div className = "col">
                            <h5>Sun</h5>
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Sunday.startTime} onChange={ e => this.handleTimeChange("Sunday", "startTime", e) } />
                        </div>
                    </div>
                    <br/>
                    <div className = "row">
                        <div className = "col">
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Monday.endTime} onChange={e => this.handleTimeChange("Monday", "endTime", e)} />
                        </div>
                        <div className = "col">
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Tuesday.endTime} onChange={ e => this.handleTimeChange("Tuesday", "endTime", e) } />
                        </div>
                        <div className = "col">
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Wednesday.endTime} onChange={ e => this.handleTimeChange("Wednesday", "endTime", e) } />
                        </div>
                        <div className = "col">
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Thursday.endTime} onChange={ e => this.handleTimeChange("Thursday", "endTime", e) } />
                        </div>
                        <div className = "col">
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Friday.endTime} onChange={ e => this.handleTimeChange("Friday", "endTime", e) } />
                        </div>
                        <div className = "col">
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Saturday.endTime} onChange={ e => this.handleTimeChange("Saturday", "endTime", e) } />
                        </div>
                        <div className = "col">
                            <DatePicker showTimeSelect showTimeSelectOnly timeFormat="h:mm a" dateFormat="h:mm a" timeIntervals={15} selected ={this.state.listingHours.Sunday.endTime} onChange={ e => this.handleTimeChange("Sunday", "endTime", e) } />
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <FilePond
                        allowMultiple={true}
                    />
                    <br/>
                    <input type='submit'/>
                </div>
            </form>
        );
    }
}

export default Account;