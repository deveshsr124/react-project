import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import SecondNavbar from './NavComponent/SecondNavbar';
import universityImage from './university-image.jpg';

const Details = () => {
	return (
		<div className="details-component">
			<MainNavbar />
			<SecondNavbar
				firstItem="Search For University"
				SecondItem="Counselor"
				ThirdItem="Schedulor"
				FourthItem="Packages and Services"
				route="/search"
			/>
			<a href="/search">
				<button className="backTo">
					<i className="fas fa-arrow-left"></i> Back to Search
				</button>
			</a>
			<div className="intial-info">
				<img src={universityImage} alt="university" className="university-bg" />

				<div className="intials">
					<h1>Harvard University</h1>
					<p className="intials-location">
						<i className="fas fa-map-marker-alt"></i>
						Cambridge, Massacheussets
					</p>
				</div>
				<span className="addTo">
					<i className="far fa-star"></i>Add to Favourites
				</span>
				<button className="apply-btn">Apply Now</button>
			</div>
			<SecondNavbar
				firstItem="About"
				SecondItem="Stats"
				ThirdItem="Alumni starting salaries"
				FourthItem="Cost of living"
				FivthItem="Popular specializations"
				SixthItem="Gallery"
				SeventhItem="similar
				schools"
				EightItem="Address and
				geography"
			/>
			<div className="detailed-content">
				<h2>About</h2>
				<p className="more-details">
					Harvard University, founded in 1636 by a vote of the Great and General
					Court of the Massachusetts Bay Colony, is the oldest higher education
					institution in the United States. It is committed to teaching,
					learning, and research excellence, and to cultivating leaders in many
					fields that make a global difference. There are several degree
					candidates enrolled at the university, including undergraduate,
					graduate, and technical students. Aside from the Radcliffe Center for
					Advanced Research, Harvard University has 12 degree-granting colleges.
					With over 160 million awarded to over 60 percent of its undergraduate
					students, the University provides an unparalleled learning experience
					and a generous financial assistance program. In addition to the
					Radcliffe Institute for Advanced Research, it has twelve
					degree-granting colleges, delivering a truly global education. The
					faculty of the university is interested in teaching and research to
					push the limits of human understanding. The campus of Harvard provides
					a beautiful backdrop for all that happens inside the university. It
					provides th... <b style={{ fontFamily: 'Poppins' }}>Read more</b>
				</p>
				<h2>Stats</h2>
			</div>
		</div>
	);
};

export default Details;
