import React from 'react';

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
			<div className="counselor-card">
				{counselorData.map((data) => {
					return (
						<div className="profiles">
							<img
								className="profile-pic"
								src="https://lh3.googleusercontent.com/a-/AOh14GgB0tQpM8n0hUdTlwk5btaGkida80G-Tl7R60iHjQ=c0x00000000-cc-rp"
								alt="counselor"
							/>
							<h3 className="profile-name">{data.name}</h3>
							<p className="work">{data.work}</p>
							<p className="experience">{data.experience}</p>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default CounselorCard;
