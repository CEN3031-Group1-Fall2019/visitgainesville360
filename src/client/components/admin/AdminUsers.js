import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {gatherUsers, foundUsers} from "../../actions/admin.actions";

class AdminUsers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			browseUsers: [],
			stateSet: false
		};
	}

	componentDidMount() {
		var query = {}
		this.props.gatherUsers(query)
		.then(res => {
			console.log()
			this.setState({
				browseUsers: foundUsers,
				stateSet: true
			})
		})
		.catch(err => {
			console.log("Error while getting the listings");
			console.log(err);
		});
	}

	renderUsers(user){
		return (
			<li class="list-group-item d-flex justify-content-between align-items-center text-dark">
				{user.name} - {user.email}
		  	</li>
		);
	}

	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		if(this.state.stateSet) {
			var users = [];
			for(let user of Object.values(this.state.browseUsers)) {
				users.push(this.renderUsers(user));
			}
	
			return (
				<div className="container listings">
					<p className="page-header">Current Users</p>
					<hr />
					<ul class="list-group">
					{users}
					</ul>
				</div>
			);
		}
		else return null;
	}
}

AdminUsers.propTypes = {
	gatherUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps,
	{gatherUsers}
)(AdminUsers);