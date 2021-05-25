import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import SecondNavbar from './NavComponent/SecondNavbar';
import CardList from './CardComponent/CardList';

const ResourcesPage = () => {
	return (
		<div>
			<MainNavbar />
			<SecondNavbar
				firstItem="International admissions update"
				SecondItem=" Videos"
				ThirdItem="Ebooks"
				FourthItem="Brochures"
				FivthItem="Test/Quiz"
			/>
			<div className="resource-holder">
				<div className="resource-card">
					<img
						src="https://www.manyagroup.com/wp-content/themes/manyaV2/image/GMAT_Online-Exam-E-Book-image.jpg"
						className="card-img"
					/>
					<p className="subhead">Gmat online exam </p>
					<div className="download-res">Download</div>
				</div>
				<div className="resource-card">
					<img
						src="https://www.manyagroup.com/wp-content/themes/manyaV2/image/GMAT_Online-Exam-E-Book-image.jpg"
						className="card-img"
					/>
					<p className="subhead">Gmat online exam </p>
					<div className="download-res">Download</div>
				</div>
			</div>

			<h2 className="heading">Recommended Universities</h2>
			<CardList />
		</div>
	);
};

export default ResourcesPage;
