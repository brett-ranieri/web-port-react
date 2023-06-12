import React from "react";
import ProjectCard from "./ProjectCard";
import { data } from "../projectData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectView = () => {
	const slideLeft = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 400;
	};

	const slideRight = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 400;
	};

	const viewData = data.slice(0, 4);

	return (
		<div className='project main-view-comp'>
			<h1 className='text-4xl font-bold text-gray-900'>Howdy, I'm the Project Page</h1>
			<div className='relative flex items-center'>
				<MdChevronLeft
					className='opacity-50 cursor-point hover:opacity-100'
					onClick={slideLeft}
					size={40}
				/>
				<div
					id='slider'
					className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll smooth scrollbar-hide'
				>
					{viewData.map((project) => (
						<ProjectCard
							project={project}
							key={project.number}
						/>
					))}
				</div>
				<MdChevronRight
					className='opacity-50 cursor-point hover:opacity-100'
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
