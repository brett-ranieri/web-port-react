import React from "react";
import ProjectCard from "./ProjectCard";
import { data } from "../projectData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ProjectView = () => {
	const slideLeft = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 400;
	};

	const slideRight = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 400;
	};

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
					{data.map((project) => (
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
		</div>
	);
};

export default ProjectView;
