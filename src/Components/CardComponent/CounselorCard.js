import React from 'react';
import counselor from '../counselor.png';
import { Link } from 'react-router-dom';

const CounselorCard = () => {
	const counselorData = [
		{
			Id: Math.random(),
			name: 'Harvey Spectre',
			work: 'Expert in loans and financing for education abroad',
			experience: '4000+ students 10yrs exp',
		},
		{
			Id: Math.random(),
			name: 'Louis litt',
			work: 'Expert in loans and financing for education abroad',
			experience: '4000+ students 10yrs exp',
		},
		{
			Id: Math.random(),
			name: 'Harvey Spectre',
			work: 'Expert in loans and financing for education abroad',
			experience: '4000+ students 10yrs exp',
		},
	];
	return (
		<React.Fragment>
			<Link to="/counselorChat">
				<div className="counselor-card">
					{counselorData.map((data) => {
						return (
							<div className="profiles">
								<img className="profile-pic" src={counselor} alt="counselor" />
								<h3 className="profile-name">{data.name}</h3>
								<p className="work">{data.work}</p>
								<p className="experience">{data.experience}</p>
							</div>
						);
					})}
				</div>
			</Link>
		</React.Fragment>
	);
};

export default CounselorCard;
