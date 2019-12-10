import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class InfoControl extends React.Component {
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
					to={`/listing/${this.state.currentListing._id}`}>
					<Button variant="info">
						<FontAwesomeIcon icon={faInfoCircle}/>
					</Button>
				</Link>
        	</div>
		);
	}

	render() {
		if(!this.state.stateSet) {
			const {currentListing} = this.props;
			this.setState({
				currentListing: currentListing,
				stateSet: true
			});
		}

		if(this.state.stateSet) {
			return (
				<div className="d-flex justify-content-center align-items-bottom row">
					<div className="col-1">{this.infoButton()}</div>
				</div>
			);
		}
		return null;
	}
}

export default InfoControl;