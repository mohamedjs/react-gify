import React from 'react';

class GallaryCard extends React.Component {
	render() {
		return (
			<img src={this.props.gif} alt="any" className="img-responsive" />
		);
	}
}

export default GallaryCard
