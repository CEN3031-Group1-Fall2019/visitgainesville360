import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from "../../actions/login.actions";
import {validateLoginInput} from "../../utils/validate";

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}

	routeUser(prop) {
		if (prop.login.isLoggedIn) {
			if(prop.login.isAdmin) {
				console.log("Sending to ADMIN");
				this.props.history.push("/admin-dashboard");
			} else {
				console.log("Sending to CLIENT");
				this.props.history.push("/samplepage");
			}
		}
	}

	handleChange(e) {
		this.setState({ 
			[e.target.id]: e.target.value 
		});
	};

	onSubmit(e) {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};

		validateLoginInput(userData, function(errors, isValid) {
			if (isValid) {
				console.log("Logging in for user email", this.state.email);
				this.props.loginUser(userData);
			} else {
				this.setState ({
					errors: errors
				});
			}
		}.bind(this));
	}

	render() {
		this.routeUser(this.props);

		return (
			<div className="d-flex justify-content-center">
				<div className="page-container d-flex justify-content-center">
					<div className="jumbotron">
			<p className="display-3">Login</p>

			<hr className="my-4" />
				<form noValidate onSubmit={this.onSubmit.bind(this)}>
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
						<button
							type="submit"
							className="btn btn-info">
							Login
						</button>
					</div>
				</form>
			<p className="row d-flex justify-content-center">
				Don't have an account?&nbsp;
				<Link className="link" to="/register">
					Click here to register.
				</Link>
			</p>
			</div>
			</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	login: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
	login: state.login
});
  
export default connect(
	mapStateToProps,
	{loginUser}
)(Login);