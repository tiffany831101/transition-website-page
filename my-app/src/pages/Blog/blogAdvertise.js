import React from 'react';
class Advertise extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="mt-2 col-lg-3 col-md-3 col-6 ad__box">
				<img
					className="img-fluid mt-3"
					src="https://images.pexels.com/photos/1058276/pexels-photo-1058276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
				/>
				<img
					className="img-fluid mt-3"
					src="https://images.pexels.com/photos/623046/pexels-photo-623046.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
				/>
			</div>
		);
	}
}

export default Advertise;
