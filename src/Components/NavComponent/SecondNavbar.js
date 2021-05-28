import React from 'react';

const SecondNavbar = (props) => {
	return (
		<React.Fragment>
			<div className="second-menu">
				<a href={props.route} className="item">
					{props.firstItem}
				</a>
				<a href="#" className="item">
					{props.SecondItem}
				</a>
				<a href="#" className="item">
					{props.ThirdItem}
				</a>
				<a href="/#" className="item">
					{props.FourthItem}
				</a>
				<a href="/#" className="item">
					{props.FivthItem}
				</a>
				<a href="/#" className="item ">
					{props.SixthItem}
				</a>
				<a href="/#" className="item ">
					{props.SeventhItem}
				</a>
				<a href="/#" className="item ">
					{props.EightItem}
				</a>
			</div>
			<hr className="ui divider"></hr>
		</React.Fragment>
	);
};

export default SecondNavbar;
