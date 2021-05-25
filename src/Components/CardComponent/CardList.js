import React from 'react';
import Data from '../data';
import Card from './Card';

const CardList = () => {
	return (
		<React.Fragment>
			<span className="card-cont ">
				{Data.map((data) => {
					return (
						<div key={data.Id}>
							<Card
								name={data.name}
								location={data.location}
								placement={data.placement}
								rating={data.rating}
							/>
						</div>
					);
				})}
			</span>
		</React.Fragment>
	);
};

export default CardList;
