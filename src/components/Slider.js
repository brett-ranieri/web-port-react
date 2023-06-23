import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ProjectCard from "./ProjectCard";
import { data } from "../projectData";

const Slider = ({ sliderType, sliderMove, onOpen, setProjModalContent }) => {
	const [sliderView, setSliderView] = useState("");

	useEffect(() => {
		if (sliderType === 1) {
			setSliderView("project");
		}
	}, [sliderType]);

	const slideLeft = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - sliderMove;
	};

	const slideRight = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + sliderMove;
	};

	const viewData = data.slice(0, 4);

	if (sliderView === "project")
		return (
			<>
				<div className='relative flex items-center'>
					<MdChevronLeft
						className='slider-btn opacity-50 cursor-point hover:opacity-100'
						onClick={slideLeft}
						size={40}
					/>
					<div
						id='slider'
						className=' m-2 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll smooth scrollbar-hide'
					>
						{viewData.map((project) => (
							<ProjectCard
								onOpen={onOpen}
								setProjModalContent={setProjModalContent}
								project={project}
								key={project.number}
							/>
						))}
					</div>
					<MdChevronRight
						className='slider-btn opacity-50 cursor-point hover:opacity-100'
						onClick={slideRight}
						size={40}
					/>
				</div>
			</>
		);

	return (
		<div className='relative flex items-center'>
			<MdChevronLeft
				className='slider-btn opacity-50 cursor-point hover:opacity-100'
				onClick={slideLeft}
				size={40}
			/>
			<div
				id='slider'
				className=' m-2 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll smooth scrollbar-hide'
			>
				{viewData.map((project) => (
					<ProjectCard
						onOpen={onOpen}
						setProjModalContent={setProjModalContent}
						project={project}
						key={project.number}
					/>
				))}
			</div>
			<MdChevronRight
				className='slider-btn opacity-50 cursor-point hover:opacity-100'
				onClick={slideRight}
				size={40}
			/>
		</div>
	);
};

export default Slider;
