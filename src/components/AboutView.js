import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TfiGallery } from "react-icons/tfi";

const AboutView = () => {
	const [scrollZoomOne, setScrollZoomOne] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 900) {
				setScrollZoomOne(true);
			} else {
				setScrollZoomOne(false);
			}
		});
	}, []);

	return (
		<div className='about-view main-view-comp flex flex-col justify-center items-center'>
			<div className='blur'></div>
			{/* <h1>I'm the About Page</h1>
			<p>Here you will find information about me.</p> */}
			<div className='about-view-content'>
				<img
					src='./img/wedding_photo.jpg'
					alt='wedding in the mountains'
					className={`wedding-img h-[150px] m-3 ${scrollZoomOne ? "h-[700px]" : ""}`}
					id='wedding_photo'
				/>
				<h1 className='marker section-title	about-view-header text-4xl font-extrabold text-gray-900'>
					About Me
				</h1>
				<div className='about-view-text-container-one rounded pl-2 pt-1'>
					<p className='about-view-text text-m font-semibold'>
						After spending most of my life in the Northeast I moved to Colorado following the call
						of the mountains. Here I met my wife, adopted a small managerie of animals, and decided
						I wanted a career change.
					</p>
				</div>
				<div className='about-view-text-container-two rounded pl-2 pt-1'>
					<p className='about-view-text text-m font-semibold'>
						Over a decade in the Entertainment and Event industries provided me with invaluable
						experience and knowledge that allows me to bring a different perspective to Web
						Development.
					</p>
				</div>

				<div className='about-btn-loc'>
					<Link
						className='primary-btn py-2 px-4 hover:scale-105 flex flex-row justify-center items-center gap-2'
						to='/picture_gallery'
					>
						Check out the Picture Gallery <TfiGallery className='menu-btn-icon place-self-end' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AboutView;
