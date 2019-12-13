import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {gatherUsers, foundUsers, modifyUser} from "../../actions/admin.actions";

class AdminUsers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			browseUsers: []
		};
	}

	componentDidMount() {
		this.props.gatherUsers({})
		.then(res => {
			console.log("Mounted users", foundUsers)
			this.setState({
				browseUsers: foundUsers
			})
		})
		.catch(err => {
			console.log("Error in componentDidMount while retrieving all users");
			console.log(err);
		});
	}

	componentDidUpdate(prevState) {
		if (this.state.browseUsers !== undefined &&
			prevState.browseUsers !== undefined &&
			prevState.browseUsers !== this.state.browseUsers) {
				console.log('This state browse users', this.state.browseUsers)
				console.log('prev state browse users', prevState.browseUsers)
				this.props.gatherUsers({})
				.then(res => {
					this.setState({
						browseUsers: foundUsers
					})
				})
				.catch(err => {
					console.log("Error in componentDidUpdate while retrieving all users");
					console.log(err);
				});
		}
	}

	makeAdmin = (user) => {
		return function() 
			{var query = {
				email: user.email,
				updates: {
					isAdmin: true
				}
			}
			this.props.modifyUser(query);
		}
	}

	removeAdmin = (user) => {
		return function() 
			{var query = {
				email: user.email,
				updates: {
					isAdmin: false
				}
			}
			this.props.modifyUser(query);
		}
	}


	renderUsers(user){
		return (
			<li class="list-group-item d-flex justify-content-between align-items-center text-dark">
				{user.name} - {user.email} {user.isAdmin ? '[ADMIN]' : ''}

				<div class="btn-group" role="group">
				{!user.isAdmin ? 
					<Link to="/admin-users">
					<button
						type="button" 
						class="btn btn-primary btn-sm" 
						onClick={this.makeAdmin(user).bind(this)}>
							Make Admin
					</button></Link> :
					<Link to="/admin-users">
					<button 
						type="button" 
						class="btn btn-danger btn-sm"
						onClick={this.removeAdmin(user).bind(this)}>
							Remove Admin
					</button></Link>}
				<button type="button" class="btn btn-info">Listings</button>
				</div>
		  	</li>
		);
	}

	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		var users = [];
		for(let user of Object.values(this.state.browseUsers)) {
			users.push(this.renderUsers(user));
		}

		return (
			<div className="container listings">
				<p className="page-header">Current Users</p>
				<hr />
				<ul class="list-group">
				<p>{users}</p>
				<p>
				</p>
				</ul>
			</div>
		);
	}
}

AdminUsers.propTypes = {
	gatherUsers: PropTypes.func.isRequired,
	modifyUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{gatherUsers, modifyUser}
)(AdminUsers);