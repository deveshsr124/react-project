import React from 'react';
import Data from '../data';
import Card from './Card';

const CardList = () => {
	return (
		<div>
			<span className="card-cont">
				{Data.map((data) => {
					return (
						<div>
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
		</div>
	);
};

export default CardList;
