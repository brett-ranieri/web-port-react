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
		<div className='bg-lgreen h-[100vh]'>
			<div className='pb-[70px]'>
				<Link
					className='primary-btn btm-btn px-3 py-2'
					to='/'
				>
					Back to Main
				</Link>
			</div>
			<h1 className='marker text-tan text-4xl sm:text-5xl drop-shadow-dark pl-6'>
				Picture Gallery
			</h1>
			<div className='h-[60vh] w-[100vw] flex flex-col justify-center items-center'>
				<img
					className='shown-picture'
					src={shownPicture.image}
					alt={shownPicture.blurb}
				/>
			</div>
			<p className='raleway text-tan text-sm font-bold mx-6'>{shownPicture.blurb}</p>

			<Slider
				sliderType={3}
				sliderMove={200}
				clickPicture={clickPicture}
			/>
		</div>
	);
};

export default PictureGallery;
