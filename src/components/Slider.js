import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ProjectCard from "./ProjectCard";
import { data } from "../projectData";
import { images } from "../projectImages";

const Slider = ({ sliderType, sliderMove, onOpen, project, number, modControl, clickPicture }) => {
	const [sliderView, setSliderView] = useState("");

	useEffect(() => {
		if (sliderType === 1) {
			setSliderView("project");
		}
		if (sliderType === 2) {
			setSliderView("projectCard");
		}
		if (sliderType === 3) {
			setSliderView("gallery");
		}
	}, [sliderType]);

	const slideLeft = () => {
		if (sliderView === "projectCard") {
			const slider = document.getElementById(number);

			console.log(slider);
			slider.scrollLeft = slider.scrollLeft - sliderMove;
		} else {
			const slider = document.getElementById("slider");
			slider.scrollLeft = slider.scrollLeft - sliderMove;
		}
	};

	const slideRight = () => {
		if (sliderView === "projectCard") {
			const slider = document.getElementById(number);
			console.log(slider);
			slider.scrollLeft = slider.scrollLeft + sliderMove;
		} else {
			const slider = document.getElementById("slider");
			slider.scrollLeft = slider.scrollLeft + sliderMove;
		}
	};

	const viewData = data.slice(0, 4);

	if (sliderView === "project")
		return (
			<>
				<div className='relative flex items-center'>
					<MdChevronLeft
						className='slider-btn opacity-50 cursor-pointer hover:opacity-100'
						onClick={slideLeft}
						size={40}
					/>
					<div
						id='slider'
						className=' m-2 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll smooth scrollbar-hide'
					>
						{viewData.map((project) => (
							<React.Fragment key={project.number}>
								<ProjectCard
									onOpen={onOpen}
									modControl={modControl}
									project={project}
								/>
							</React.Fragment>
						))}
					</div>
					<MdChevronRight
						className='slider-btn opacity-50 cursor-pointer hover:opacity-100'
						onClick={slideRight}
						size={40}
					/>
				</div>
			</>
		);

	if (sliderView === "projectCard")
		return (
			<>
				<div className='proj-slider relative flex items-center'>
					<MdChevronLeft
						className='no-highlight slider-btn opacity-50 cursor-pointer hover:opacity-100'
						onClick={slideLeft}
						size={40}
					/>
					<div
						id={number}
						className='flex flex-row m-2 w-[100vw] h-full overflow-x-scroll scroll whitespace-nowrap scroll smooth scrollbar-hide'
					>
						{/* <div className='img-container flex flex-row justify-center p-2'> */}
						{project.images.map((image) => (
							<img
								key={image.alt}
								className='h-[250px] hover:scale-110 ease-in-out duration-300 m-2'
								src={image.source}
								alt={image.alt}
							/>
						))}
						{/* </div> */}
					</div>
					<MdChevronRight
						className='no-highlight slider-btn opacity-50 cursor-pointer hover:opacity-100'
						onClick={slideRight}
						size={40}
					/>
				</div>
			</>
		);

	if (sliderView === "gallery")
		return (
			<>
				<div className='gallery-slider-container md:h-[20%] sm:h-[15%] flex items-center p-2'>
					<MdChevronLeft
						className='gallery-slider-btn slider-btn opacity-50 cursor-pointer hover:opacity-100'
						onClick={slideLeft}
						size={40}
					/>
					<div
						id='slider'
						className='flex flex-row p-2 m-2 w-full h-[90%] overflow-x-scroll scroll whitespace-nowrap scroll smooth scrollbar-hide'
					>
						{/* <div className='img-container '> */}
						{images.map((content) => (
							<img
								src={content.image}
								alt={content.id}
								key={content.id}
								className='gallery-slider mx-2 cursor-pointer'
								onClick={() => clickPicture(content)}
							/>
						))}
						{/* </div> */}
					</div>
					<MdChevronRight
						className='gallery-slider-btn slider-btn opacity-50 cursor-pointer hover:opacity-100'
						onClick={slideRight}
						size={40}
					/>
				</div>
			</>
		);

	return null;
};

export default Slider;
