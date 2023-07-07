import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { useState } from "react";
import { firstGallery } from "../projectImages";

const PictureGallery = () => {
	const [shownPicture, setShownPicture] = useState(firstGallery);
	// useEffect(() => {
	// 	handleState();
	// });

	// function logState() {
	// 	console.log(mainView);
	// }

	function clickPicture(content) {
		setShownPicture(content);
	}

	return (
		<div>
			<div className='flex-container proj-btn-container'>
				<Link
					className='primary-btn px-3 py-2'
					to='/'
				>
					Back to Main
				</Link>
				{/* <Link
					className='link-btn ml-2'
					to='/about'
				>
					Back to About
				</Link> */}
			</div>

			<div className='gallery-container h-[100vh]'>
				<h1 className='light-section-title marker pl-6'>Picture Gallery</h1>
				<div className='h-[58%] flex flex-col justify-center items-center'>
					<img
						className='shown-picture'
						src={shownPicture.image}
						alt={shownPicture.blurb}
					/>
				</div>
				<p className='light-section-text ml-10'>{shownPicture.blurb}</p>
				<Slider
					sliderType={3}
					sliderMove={370}
					clickPicture={clickPicture}
				/>
			</div>
		</div>
	);
};

export default PictureGallery;
