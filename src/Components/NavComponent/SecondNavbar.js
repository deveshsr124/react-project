import React from 'react';

const SecondNavbar = (props) => {
	return (
		<React.Fragment className="ui segment ">
			<p className="headertxt">{props.headertxt}</p>
			<div className="second-menu">
				<a href="/" className="item">
					{props.firstItem}
				</a>
				<a href="/" className="item">
					{props.SecondItem}
				</a>
				<a href="/" className="item">
					{props.ThirdItem}
				</a>
				<a href="/" className="item">
					{props.FourthItem}
				</a>
			</div>
			<div className="ui divider"></div>
		</React.Fragment>
	);
};

export default SecondNavbar;
