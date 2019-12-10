import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {registerUser} from "../../actions/login.actions"
import {validateRegisterInput} from "../../utils/validate";

class Register extends React.Component {
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

	/*UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.login.isLoggedIn) {
			console.log("Sending to client's dashboard");
			this.props.history.push("/samplepage");
		}
	}*/

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
		if (this.props.login.isLoggedIn) {
			if(this.props.login.isAdmin) {
				console.log("Sending to ADMIN");
				this.props.history.push("/admin");
			} else {
				console.log("Sending to CLIENT");
				this.props.history.push("/samplepage");
			}
		}

		return (
			<div className="container">
				<p className="page-header">Register</p>
				<form noValidate onSubmit={this.onSubmit.bind(this)}>
					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="name">Name</label>
							<input
								onChange={this.handleChange.bind(this)}
								value={this.state.name}
								id="name"
								type="text"
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