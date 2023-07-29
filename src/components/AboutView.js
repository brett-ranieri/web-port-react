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
			<div className='relative h-full flex flex-col justify-center items-center'>
				<img
					src='./img/wedding_photo.jpg'
					alt='wedding in the mountains'
					className={`wedding-img h-full sm:h-[150px] ${
						scrollZoomOne ? "sm:h-full sm:transition-height sm:duration-700 sm:ease-in-out" : ""
					}`}
					id='wedding_photo'
				/>
				<h1 className='marker z-1000 text-dgreen text-5xl sm:text-6xl md:text-7xl absolute top-[70px] right-[30px] sm:right-[100px] md:right-[200px]'>
					About Me
				</h1>
				<div className='bg-dgreen opacity-80 absolute w-[250px] md:w-[350px] h-auto z-101 top-40 md:top-60 left-6 sm:left-10 md:left-20 rounded'>
					<p className='relative w-auto h-auto z-102 text-offwhite raleway font-semibold text-sm md:text-base p-2'>
						After spending most of my life in the Northeast I moved to Colorado following the call
						of the mountains. Here I met my wife, adopted a small managerie of animals, and decided
						I wanted a career change.
					</p>
				</div>
				<div className='bg-dgreen opacity-80 absolute w-[250px] md:w-[350px] h-auto z-101 bottom-52 md:bottom-40 left-10 sm:left-14 md:left-24 rounded'>
					<p className='relative w-auto h-auto z-102 text-offwhite raleway font-semibold text-sm md:text-base p-2'>
						Over a decade in the Entertainment and Event industries provided me with invaluable
						experience and knowledge that allows me to bring a different perspective to Web
						Development.
					</p>
				</div>

				<div className='about-btn-loc'>
					<Link
						className='primary-btn py-2 px-4 invisible md:visible hover:scale-105 flex flex-row justify-center items-center gap-2'
						to='/picture_gallery'
					>
						Check out the Picture Gallery <TfiGallery className='menu-btn-icon place-self-end' />
					</Link>
				</div>
				<div className='absolute z-102 bottom-14 right-35'>
					<Link
						className='primary-btn py-2 px-4 xs:visible md:invisible hover:scale-105 flex flex-row justify-center items-center gap-2'
						to='/picture_gallery'
					>
						Picture Gallery <TfiGallery className='menu-btn-icon place-self-end' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AboutView;
