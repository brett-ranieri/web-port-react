import React from "react";

const ProjectCard = ({ project }) => {
	return (
		<div className='w-[350px] h-[400px] m-2 p-2 proj-card'>
			<h1 className='proj-title'>{project.name}</h1>
			<p className='italic'>Languages: {project.languages}</p>
			<img
				className='w-[300px] cursor-pointer hover:scale-75 ease-in-out duration-300'
				src={project.images[0].source}
				alt={project.images[0].alt}
			/>
			<p className='whitespace-normal'>{project.shortDescription}</p>
		</div>
	);
};

export default ProjectCard;
