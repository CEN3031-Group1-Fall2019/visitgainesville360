import React from 'react';

class Featured extends React.Component {

	render() {
		return (
			<div>
				<div className="row-lg-12">
					<p className="page-header p-5">Featured</p>
				</div>
				<div className="row-lg-12 d-flex justify-content-center">
					<h1>The Hippodrome</h1>
				</div>
				<div className="row-lg-12 d-flex justify-content-center p-5">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hippodrome_Gainesville.jpg/500px-Hippodrome_Gainesville.jpg" />
				</div>
				<div className="row d-flex justify-content-center p-2">
					<div className="col-lg-4">
					<p>The Hippodrome Theatre (often referred to by residents as the Hipp) is a regional professional theatre in downtown Gainesville, Florida, United States. It was founded in 1973 by local actors.[1] The address is 25 Southeast 2nd Place.

The interior is in good condition, maintaining much of the original walls, doors and beams from its post office and courthouse era. It is a relatively small location, with a 268-seat thrust stage main stage theater on the second floor and 80-seat cinema space on the first floor. The Hippodrome building also has one of the oldest working elevators in Florida which requires the operator to manually close the screen, the door, and then pull a crank to operate.[2]

The Hippodrome uses professional actors and has its own set designers, costume designers, sound engineers and lighting engineers for each of its main stage productions. It also provides youth theater education classes. The Hippodrome features Broadway and off Broadway productions and art house films.

The Hippodrome provides arts education for all ages, including classes and camps, in-school programs, workshops and behind-the-scenes opportunities for adults. </p>
				</div>
					<div className="col-lg-2"><h5>Link: www.website.com<br />Phone: 123-345-6789<br />Address: 123 Main St, Gainesville, FL 32607</h5></div>
				
				</div>
				
			</div>
		);
	}

}

  
export default Featured;