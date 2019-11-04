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
				<p className="h2 p-3">Login</p>
				<form>
				<div className="row align-items-center">
					<div className="col-4">Email</div>
					<div className="col-12">
						<input
							onChange={this.handleChange}
							value={this.state.email}
							id="email"
							type="email"
						/>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col-4">Password</div>
					<div className="col-12">
						<input
							onChange={this.handleChange}
							value={this.state.password}
							id="password"
							type="password"
						/>
					</div>
				</div>

				<div className="row-12 p-3">
					<button
						type="submit"
						className="btn btn-success">
						Login
					</button>
				</div>
				</form>
			</div>
		);
	}
}
export default Login;