import React from 'react';

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

	handleChange = e => {
		this.setState({ 
			[e.target.id]: e.target.value 
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};
		console.log(newUser);
	}

	render() {
		return (
			<div className="container">
				<p className="h1 text-center p-5 m-5">Register</p>
				<form onSubmit={this.onSubmit}>
					<div className="row d-flex justify-content-center p-3">
						<div className="column column-40">
						<label htmlFor="name">Business Name</label>
							<input
								onChange={this.handleChange}
								value={this.state.name}
								id="name"
								type="text"
							/>
						</div>
					</div>

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
						<div className="column column-40">
						<label htmlFor="password2">Confirm Password</label>
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