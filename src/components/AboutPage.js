import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
// import { useEffect } from "react";

const AboutPage = () => {
	// useEffect(() => {
	// 	handleState();
	// });

	// function logState() {
	// 	console.log(mainView);
	// }

	return (
		<div>
			<div className='flex-container proj-btn-container'>
				<Link
					className='link-btn'
					to='/'
				>
					Back to Main
				</Link>
			</div>

			<div className='about-container'>
				<h1 className='text-4xl font-bold text-gray-900'>Hey-yo, I'm the About Page</h1>

				<ScrollToTop />
			</div>
		</div>
	);
};

export default AboutPage;
