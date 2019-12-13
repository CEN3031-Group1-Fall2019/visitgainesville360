import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {editUser} from "../../actions/login.actions"
import {validateRegisterInput} from "../../utils/validate";

class EditLogin extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {}
		};		
	}
	
	handleChange(e) {
		this.setState({ 
			[e.target.id]: e.target.value 
		});
	}

	onSubmit = e => {
		e.preventDefault();

		const newUser = {
			oldname: this.props.login.user.name,
			oldemail: this.props.login.user.email,
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		validateRegisterInput(newUser, function(errors, isValid) {
			if (isValid) {
				console.log("Editing user: ", newUser.name, newUser.email);
				this.props.editUser(newUser);
			} else {
				this.setState ({
					errors: errors
				});
			}
		}.bind(this));
	}

	render() {
		if (!this.props.login.isLoggedIn) {
			this.props.history.push("/");
		}

		return (
			<div className="container">
				<p className="page-header">Account Information</p>
					<div className="row d-flex justify-content-center p-3">
						<p>Name: {this.props.login.user.name}<br />
						Email: {this.props.login.user.email}</p>
					</div>
				<p className="page-header">Edit Account Information</p>
				<form noValidate onSubmit={this.onSubmit.bind(this)}>
					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="name">Name</label>
							<input
								onChange={this.handleChange.bind(this)}
								value={this.state.name}
								id="name"
								type="text"
								placeholder="Enter new name"
							/>
							<div className="inputError">{this.state.errors.name}</div>
						</div>
					</div>
					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="email">Email</label>
							<input
								onChange={this.handleChange.bind(this)}
								value={this.state.email}
								id="email"
								type="email"
								placeholder="Enter new email address"
							/>
							<div className="inputError">{this.state.errors.email}</div>
						</div>
					</div>

					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="password">Password</label>
							<input
								onChange={this.handleChange.bind(this)}
								value={this.state.password}
								id="password"
								type="password"
							/>
							<div className="inputError">{this.state.errors.password}</div>
						</div>
					</div>

					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="password2">Confirm Password</label>
							<input
								onChange={this.handleChange.bind(this)}
								value={this.state.password2}
								id="password2"
								type="password"
							/>
							<div className="inputError">{this.state.errors.password2}</div>
						</div>
					</div>

					<div className="row d-flex justify-content-center p-3">
						<button
							type="submit"
							className="button button-background">
							Register
						</button>
					</div>
				</form>
			</div>
		);
	}
}

EditLogin.propTypes = {
	editUser: PropTypes.func.isRequired,
	login: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{editUser}
)(withRouter(EditLogin));