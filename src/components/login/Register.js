import React from 'react';

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			business: '',
			email: '',
			password: '',
			confirmpassword: '',
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
				<p className="h2 p-3">Register</p>
				<form>

				<div className="row align-items-center">
					<div className="col-4">Business Name</div>
					<div className="col-12">
						<input
							onChange={this.handleChange}
							value={this.state.business}
							id="business"
							type="text"
						/>
					</div>
				</div>

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
				<div className="row align-items-center">
					<div className="col-4">Confirm Password</div>
					<div className="col-12">
						<input
							onChange={this.handleChange}
							value={this.state.confirmpassword}
							id="confirmpassword"
							type="password"
						/>
					</div>
				</div>

				<div className="row p-3">
					<button
						type="submit"
						className="btn btn-success">
						Register
					</button>
				</div>
				</form>
			</div>
		);
	}
}
export default Register;