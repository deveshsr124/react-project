import React from 'react';

const Card = (props) => {
	return (
		<div className="ui card">
			<div className="image">
				<img
					src="https://www.collegeconsensus.com/wp-content/uploads/2016/12/o-HARVARD-UNIVERSITY-BUILDING-facebook.jpg"
					alt="card=img"
				/>
			</div>
			<div className="content">
				<div className="header">{props.name}</div>
				<div className="meta">
					<i class="fas fa-map-marker-alt"></i>
					<span className="date">{props.location}</span>
				</div>
				<div className="description">
					Placement :- {props.placement}
					<br />
					Rating : {props.rating}
				</div>
			</div>
		</div>
	);
};

export default Card;
