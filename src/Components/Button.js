import React from 'react';

const Button = (props) => {
	return (
		<button className={props.styleBtn} type="submit">
			{props.buttonTxt}
		</button>
	);
};

export default Button;
