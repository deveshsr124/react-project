import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import SecondNavbar from './NavComponent/SecondNavbar';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';

const ProgressPage = () => {
	return (
		<div>
			<MainNavbar />
			<SecondNavbar firstItem="Test Prep" SecondItem="Admission" />
			<div class="progress-cont">
				<CircularProgress
					value={82.3}
					style={{
						color: 'black',
						marginLeft: '50px',
						marginTop: '15px',
					}}
					size="200px"
					thickness="7px"
					color="grey"
				>
					<CircularProgressLabel style={{ fontFamily: 'Poppins' }}>
						82.3%
					</CircularProgressLabel>
				</CircularProgress>
				<p className="progress-header">Learning Modules Completed</p>
			</div>
			<span className="other-progress"></span>
			<div class="progress-cont">
				<CircularProgress
					value={82.3}
					style={{ color: 'black', marginLeft: '50px', marginTop: '15px' }}
					color="grey"
					size="200px"
					thickness="7px"
				>
					<CircularProgressLabel style={{ fontFamily: 'Poppins' }}>
						82.3%
					</CircularProgressLabel>
				</CircularProgress>
				<p className="progress-header1">Practice Test Completed</p>
			</div>
		</div>
	);
};

export default ProgressPage;
