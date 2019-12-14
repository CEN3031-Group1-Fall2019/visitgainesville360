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

	update() {
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

	toggleAdmin = (user, state) => {
		return function() 
			{var query = {
				email: user.email,
				updates: {
					isAdmin: state
				}
			}
			this.props.modifyUser(query);
			this.update();
		}
	}

	renderUsers(user){
		return (
			<li class="list-group-item d-flex justify-content-between align-items-center text-dark">
				{user.name} - {user.email} {user.isAdmin ? '[ADMIN]' : ''}

				<div class="btn-group" role="group">
				{!user.isAdmin ? 
					<button
						type="button" 
						class="btn btn-primary btn-sm" 
						to="/admin-users"
						onClick={this.toggleAdmin(user, true).bind(this)}>
							Make Admin
					</button>:
					<button 
						type="button" 
						class="btn btn-danger btn-sm"
						to="/admin-users"
						onClick={this.toggleAdmin(user, false).bind(this)}>
							Remove Admin
					</button>}
				<Link
					to={`/account/listings/${user._id}`}>
					<button type="button" class="btn btn-info">Listings</button>
				</Link>
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
			<div className="d-flex justify-content-center">
				<div className="page-container d-flex justify-content-center">
					<div className="jumbotron">
				<p className="display-1">Current Users</p>
				<hr />
				<ul class="list-group">
				<p>{users}</p>
				<p>
				</p>
				</ul>
			</div>
			</div>
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