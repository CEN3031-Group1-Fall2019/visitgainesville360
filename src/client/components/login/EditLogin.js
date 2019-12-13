import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {registerUser} from "../../actions/login.actions"
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
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		validateRegisterInput(newUser, function(errors, isValid) {
			if (isValid) {
				console.log("Registering new user: ", newUser.name, newUser.email);
				this.props.registerUser(newUser);
			} else {
				this.setState ({
					errors: errors
				});
			}
		}.bind(this));
	}

	render() {
		if (!this.props.login.isLoggedIn) {
			console.log("sending to home");
			this.props.history.push("/");
		}

		return (
			<div className="container">
				<p className="page-header">Account Information</p>
					<div>
						<li>Name: {this.props.login.user.name}</li>
						<li>Email: {this.props.login.user.email}</li>
					</div>
				<p className="page-header">Update Account</p>
				<form noValidate onSubmit={this.onSubmit.bind(this)}>
					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="name">Name</label>
							<input
								onChange={this.handleChange.bind(this)}
								value={this.state.name}
								id="name"
								type="text"
								placeholder={this.props.login.user.name}

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
			<p className="row d-flex justify-content-center">Already have an account?&nbsp;
			<Link className="link" to="/login">
				Click here to login.
			</Link>
			</p>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	login: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{registerUser}
)(withRouter(Register));