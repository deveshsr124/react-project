import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import SecondNavbar from './NavComponent/SecondNavbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
	const percentage = 82.3;
	return (
		<div>
			<MainNavbar />
			<SecondNavbar firstItem="Test Prep" SecondItem="Admission" />
			<div class="progress-cont">
				<CircularProgressbar
					value={percentage}
					text={`${percentage}%`}
					className="progress-bar"
					styles={{
						path: {
							// Path color
							stroke: `rgba(115, 115, 115)`,
							// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
							strokeLinecap: 'round',
						},
						// Customize the circle behind the path, i.e. the "total progress"
						trail: {
							// Trail color
							stroke: '#d6d6d6',
							// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
							strokeLinecap: 'round',
							// Rotate the trail
						},
						// Customize the text
						text: {
							// Text color
							fill: '#0d0d0d',
							// Text size
							fontSize: '16px',
							fontFamily: 'Poppins',
						},
					}}
				/>
				;<p className="progress-header">Learning Modules Completed</p>
			</div>
			<span className="other-progress"></span>
			<div class="progress-cont">
				<CircularProgressbar
					value={percentage}
					text={`${percentage}%`}
					className="progress-bar"
					styles={{
						path: {
							// Path color
							stroke: `rgba(115, 115, 115)`,
							// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
							strokeLinecap: 'round',
						},
						// Customize the circle behind the path, i.e. the "total progress"
						trail: {
							// Trail color
							stroke: '#d6d6d6',
							// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
							strokeLinecap: 'round',
							// Rotate the trail
						},
						// Customize the text
						text: {
							// Text color
							fill: '#0d0d0d',
							// Text size
							fontSize: '16px',
							fontFamily: 'Poppins',
						},
					}}
				/>
				;<p className="progress-header1">Practice Test Completed</p>
			</div>
		</div>
	);
};

export default Progress;
