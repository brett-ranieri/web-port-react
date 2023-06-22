import React from "react";
import ProjectCard from "./ProjectCard";
import { data } from "../projectData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectView = ({ onOpen, setProjModalContent }) => {
	const slideLeft = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 370;
	};

	const slideRight = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 370;
	};

	const viewData = data.slice(0, 4);

	return (
		<div className='project main-view-comp'>
			<h1 className='marker p-3 text-4xl font-bold text-gray-900'>Highlighted Work</h1>
			<p className='p-3 text-l text-gray-900'>
				The slider below displays some of my favorite recent projects. Click on the screenshots of
				any project to learn more.
			</p>
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
			<div className='flex-container btn-style'>
				<Link
					className='link-btn'
					to='/projects'
				>
					See all Projects
				</Link>
			</div>
		</div>
	);
};

export default ProjectView;
