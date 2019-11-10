import React from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from "../../actions/login.actions";

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
			console.log("Sending to client's dashboard");
			this.props.history.push("/samplepage");
		}
		if (nextProps.errors) {
			console.log("Received errors");
			this.setState({
				errors: nextProps.errors
			});
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
		
		console.log("Logging in for user email", this.state.email);
		this.props.loginUser(userData);
	}

	render() {
		const {errors} = this.state;
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
								error={errors.email}
								id="email"
								type="email"
								className={classnames("", {
									invalid: errors.email || errors.emailnotfound
								})}
							/>
							<span className="red-text">
								{errors.email}
								{errors.emailnotfound}
							</span>
						</div>
					</div>

					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="password">Password</label>
							<input
								onChange={this.handleChange.bind(this)}
								value={this.state.password}
								error={errors.password}
								id="password"
								type="password"
								className={classnames("", {
									invalid: errors.password || errors.passwordincorrect
								})}
							/>
							<span className="red-text">
								{errors.password}
								{errors.passwordincorrect}
							</span>
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
	login: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
	login: state.login,
	errors: state.errors
});
  
export default connect(
	mapStateToProps,
	{loginUser}
)(Login);