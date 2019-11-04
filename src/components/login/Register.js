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
				<p className="h2 text-center p-3">Register</p>
				<form>

				<div className="row d-flex justify-content-center">
					<div className="col-sm-3 text-right">Business Name</div>
					<div className="col-md-6">
						<input
							onChange={this.handleChange}
							value={this.state.business}
							id="business"
							type="text"
						/>
					</div>
				</div>

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
				<div className="row d-flex justify-content-center">
					<div className="col-sm-3 text-right">Confirm Password</div>
					<div className="col-md-6">
						<input
							onChange={this.handleChange}
							value={this.state.confirmpassword}
							id="confirmpassword"
							type="password"
						/>
					</div>
				</div>

				<div className="row d-flex justify-content-center p-3">
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