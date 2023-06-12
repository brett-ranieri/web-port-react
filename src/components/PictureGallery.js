import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { images } from "../projectImages";
// import { useEffect } from "react";

const PictureGallery = () => {
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
					to='/about'
				>
					Back to About
				</Link>
			</div>

			<div className='about-container'>
				<h1 className='text-4xl font-bold text-gray-900'>Look at me! I'm the Picture Gallery!</h1>
				<div>
					{images.map((content) => (
						<div>
							<img
								src={content.image}
								alt={content.id}
							/>
						</div>
					))}
				</div>
				<ScrollToTop />
			</div>
		</div>
	);
};

export default PictureGallery;
