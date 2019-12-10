import React from 'react';
import PropTypes from "prop-types";
import {updateListing} from "../../actions/admin.actions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class AdminListings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentListing: '',
			stateSet: false
		};
	}

	infoButton = () => {
		return (
			<div>
				<Link
					to={`/listing/${this.state.currentListing._id}`}
					{...this.props}
					currentListing={this.state.currentListing}>
					<Button variant="info">
						<FontAwesomeIcon icon={faInfoCircle}/>
					</Button>
				</Link>
        	</div>
		);
	}

	render() {
		if (!this.props.login.user.isAdmin) return null;

		if(!this.state.stateSet) {
			const {currentListing} = this.props;
			this.setState({
				currentListing: currentListing,
				stateSet: true
			});
		}

		if(this.state.stateSet) {
			return (
				<div className="flex-center flex-bottom row">
					<div className="col-1">{this.infoButton()}</div>
				</div>
			);
		}
		return null;
	}
}

AdminListings.propTypes = {
	updateListing: PropTypes.func.isRequired,
	listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	listing: state.listing,
	login: state.login
});

export default connect(
	mapStateToProps,
	{updateListing}
)(AdminListings);