import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from "../../actions/login.actions";
import {validateLoginInput} from "../../actions/validate.action";

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.login.isLoggedIn) {
			if(nextProps.login.isAdmin) {
				console.log("Sending to admin's dashboard");
				this.props.history.push("/admin");
			} else {
				console.log("Sending to client's dashboard");
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
		if (this.props.login.isLoggedIn) {
			console.log("User is already logged in");
			this.props.history.push("/samplepage");
		}

		return (
			<div className="container">
			<p className="page-header">Login</p>
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
							className="button button-background">
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