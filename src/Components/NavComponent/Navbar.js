import React from 'react';
import '../style.css';

// eslint-disable-next-line no-unused-vars
import Button from '../Button';
const NavComponent = (props) => {
	return (
		<div className="navbar">
			<img
				className="nav-img"
				src="https://www.pngfind.com/pngs/m/613-6131369_manya-abroad-the-princeton-review-tonk-road-jaipur.png"
				alt="img"
			/>

			<div className={props.divClass}>
				<span className={props.navClass}>{props.navText}</span>
				{props.children}
			</div>
		</div>
	);
};

export default NavComponent;
