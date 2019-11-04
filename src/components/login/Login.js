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
				<div className="row d-flex justify-content-center">
					<div className="col-sm-3 text-right">Email</div>
					<div className="col-md-6">
						<input
							onChange={this.handleChange}
							value={this.state.email}
							id="email"
							type="email"
						/>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-sm-3 text-right">Password</div>
					<div className="col-md-6">
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