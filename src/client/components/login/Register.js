import React from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {registerUser} from "../../actions/login.actions"

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

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
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
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		console.log("Register new user: ", newUser.name, newUser.email);
		this.props.registerUser(newUser, this.props.history); 
	}

	render() {
		const {errors} = this.state;
		return (
			<div className="container">
				<p className="page-header">Register</p>
				<form noValidate onSubmit={this.onSubmit.bind(this)}>
					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="name">Business Name</label>
							<input
								onChange={this.handleChange.bind(this)}
								value={this.state.name}
								id="name"
								type="text"
								className={classnames("", {
									invalid: errors.name
								})}
							/>
						<span className="red-text">{errors.name}</span>
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
								className={classnames("", {
									invalid: errors.email
								})}
							/>
						<span className="red-text">{errors.email}</span>
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
								className={classnames("", {
									invalid: errors.password
								})}
							/>
							<span className="red-text">{errors.password}</span>
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
								className={classnames("", {
									invalid: errors.password2
								})}
							/>
						<span className="red-text">{errors.password2}</span>
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
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	login: state.login,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{registerUser}
)(withRouter(Register));