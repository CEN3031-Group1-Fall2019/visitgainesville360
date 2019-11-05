import React from 'react';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleChange = state =>{
		this.setState({ 
			[state.target.id]: state.target.value 
		});
	};

	render() {
		return (
			<div className="container">
				<form className="p-5">

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
					<button
						type="submit"
						className="button button-outline">
						Login
					</button>
				</div>

				</form>
			</div>
		);
	}
}
export default Login;