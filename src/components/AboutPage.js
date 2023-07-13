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
				<Link
					className='link-btn ml-2'
					to='/picture_gallery'
				>
					Picture Gallery
				</Link>
			</div>

			<div className='about-container'>
				<h1 className='text-4xl font-bold text-gray-900'>Hey-yo, I'm the About Page</h1>
				<p>
					Here would be a more detailed description of me. Likely split up into multiple paragraphs.
				</p>
				<p>This is a brief description of me, and my family.</p>
				<p>
					Here I'm thinking I'll talk about my previous professional experience/bootcamp learning?
				</p>
				<p>Hobby section right here...talk about the things I like to do for me!</p>
				<ScrollToTop />
			</div>
		</div>
	);
};

export default AboutPage;
