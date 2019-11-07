import React from 'react';
import {Link} from "react-router-dom";

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}

	handleChange = e => {
		this.setState({ 
			[e.target.id]: e.target.value 
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		console.log("logging in", userData);
	}

	render() {
		return (
			<div className="container">
			<p className="h1 text-center" style={{paddingTop:"5rem"}}>Login</p>
				<form className="" onSubmit={this.onSubmit}>
					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="email">Email</label>
							<input
								onChange={this.handleChange}
								value={this.state.email}
								id="email"
								type="email"
							/>
						</div>
					</div>

					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="password">Password</label>
							<input
								onChange={this.handleChange}
								value={this.state.password}
								id="password"
								type="password"
							/>
						</div>
					</div>

					<div className="row d-flex justify-content-center p-3">
						<button
							type="submit"
							className="button button-outline">
							Login
						</button>
					</div>
				</form>
			<p className="row d-flex justify-content-center">Don't have an account?&nbsp;
			<Link to="/register">
				Click here to register.
			</Link>
			</p>
			</div>
		);
	}
}
export default Login;