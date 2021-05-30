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
				<div class="ui grid container">
					<div class="five wide column">
						<h1>7</h1>
						<p>World ranking</p>
					</div>
					<div class="five wide column">
						<h1>6131</h1>
						<p>International students</p>
					</div>
					<div class="five wide column">
						<h1>5%</h1>
						<p>Acceptance rate </p>
					</div>
					<div class="five wide column">
						<h1>$54,002</h1>
						<p>Average academic fee per academic year</p>
					</div>
					<div class="five wide column">
						<h1>6:1</h1>
						<p>Students faculty ratio</p>
					</div>
					<div class="five wide column">
						<h1>$75</h1>
						<p>Application fees</p>
					</div>
					<div class="five wide column">
						<h1>$3,212</h1>
						<p>Average cost of living</p>
					</div>
				</div>
				<h2>Cost of Living</h2>
				<div className="selector-menu">
					<div className="menu-items">
						<p class="item-heading1">
							Total <br /> average cost
						</p>
						<p className="cost-item1">$3,212</p>
					</div>
					<div
						class="uk-divider-vertical"
						style={{
							height: '50px',
							marginLeft: '10px',
							marginRight: '10px',
							marginBottom: '5px',
							marginTop: '15px',
							color: 'blue',
							width: '15px',
						}}
					></div>
					<div className="menu-items">
						<p class="item-heading">Housing</p>
						<p className="cost-item">$2.258</p>
					</div>
					<div
						class="uk-divider-vertical"
						style={{
							height: '50px',
							marginLeft: '10px',
							marginRight: '10px',
							marginBottom: '5px',
							marginTop: '15px',
							color: 'blue',
							width: '15px',
						}}
					></div>
					<div className="menu-items">
						<p class="item-heading">Food</p>
						<p className="cost-item">$677</p>
					</div>
					<div
						class="uk-divider-vertical"
						style={{
							height: '50px',
							marginLeft: '10px',
							marginRight: '10px',
							marginBottom: '5px',
							marginTop: '15px',
							color: 'blue',
							width: '15px',
						}}
					></div>
					<div className="menu-items">
						<p class="item-heading">Daily life</p>
						<p className="cost-item">$100</p>
					</div>
					<div
						class="uk-divider-vertical"
						style={{
							height: '50px',
							marginLeft: '10px',
							marginRight: '10px',
							marginBottom: '5px',
							marginTop: '15px',
							color: 'blue',
							width: '15px',
						}}
					></div>
					<div className="menu-items">
						<p class="item-heading">Clothing</p>
						<p className="cost-item">$177</p>
					</div>
				</div>
				<h2>Popular Specializations </h2>
				<div className="details-card">
					<div class="ui grid container ">
						<div class="five wide column details-column">
							<p>MS biotechnology</p>
						</div>
						<div class="five wide column details-column">
							<p>MS Chemistry</p>
						</div>
						<div class="five wide column details-column">
							<p>Masters in business administration</p>
						</div>
						<div class="five wide column details-column">
							<p>MS biotechnology</p>
						</div>
						<div class="five wide column details-column">
							<p>MS biotechnology</p>
						</div>
						<div class="five wide column details-column">
							<p>MS biotechnology</p>
						</div>
					</div>
				</div>
				<h2>Similar Schools</h2>
				<div className="details-card">
					<div class="ui grid container ">
						<div class="five wide column details-column">
							<p>Stanford University</p>
						</div>
						<div class="five wide column details-column">
							<p>University of California</p>
						</div>
						<div class="five wide column details-column">
							<p>Chicago University</p>
						</div>
						<div class="five wide column details-column">
							<p>Michigan State University</p>
						</div>
						<div class="five wide column details-column">
							<p>University of California</p>
						</div>
						<div class="five wide column details-column">
							<p>University of California</p>
						</div>
					</div>
				</div>
				<h2>Address and Geography</h2>
				<div className="address">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94299.42909724271!2d-71.16378913477942!3d42.38818931232484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a5cb30cc5f%3A0xc53a8e6489686c87!2sCambridge%2C%20MA%2C%20USA!5e0!3m2!1sen!2sin!4v1622285983014!5m2!1sen!2sin"
						width="600"
						height="450"
						style={{ border: '0' }}
						allowfullscreen=""
						loading="lazy"
						title="map"
					></iframe>
					<p>
						Cambridge, MA, United States <br />
						Phone: +1 617-495-1000
					</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
