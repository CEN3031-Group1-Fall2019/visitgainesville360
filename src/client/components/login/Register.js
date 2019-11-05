import React from 'react';

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			password2: '',
		};
	}

	handleChange = e => {
		this.setState({ 
			[e.target.id]: e.target.value 
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const newUser = {
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};
	}

	render() {
		return (
			<div className="container">
				<p className="h2 text-center p-3">Register</p>
				<form>

				<div className="row d-flex justify-content-center p-3">
					<div className="column column-40">
					<label for="email">Email</label>
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
					<label for="password">Password</label>
						<input
							onChange={this.handleChange}
							value={this.state.password}
							id="password"
							type="password"
						/>
					</div>
				</div>

				<div className="row d-flex justify-content-center p-3">
					<div className="column column-40">
					<label for="password2">Confirm Password</label>
						<input
							onChange={this.handleChange}
							value={this.state.password2}
							id="password2"
							type="password"
						/>
					</div>
				</div>

				<div className="row d-flex justify-content-center p-3">
					<button
						type="submit"
						className="button button-outline">
						Register
					</button>
				</div>
				</form>
			</div>
		);
	}
}
export default Register;