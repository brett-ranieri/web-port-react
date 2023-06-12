import React from "react";
import { Link } from "react-router-dom";

const AboutView = () => {
	return (
		<div className='about main-view-comp'>
			<h1>I'm the About Page</h1>
			<p>Here you will find information about me.</p>

			<div className='flex-container btn-style'>
				<Link
					className='link-btn'
					to='/about'
				>
					Learn more
				</Link>
			</div>
		</div>
	);
};

export default AboutView;
