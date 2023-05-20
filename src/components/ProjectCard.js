import React from "react";

const ProjectCard = ({ project }) => {
	return (
		<div className='w-[400px] h-[400px] inline-block p-2'>
			<h1>{project.name}</h1>
			<p>{project.languages}</p>
			<img
				className='cursor-pointer hover:scale-105 ease-in-out duration-300'
				src='https://placehold.co/300x150'
				alt='placeholder'
			/>
			<p className='whitespace-normal'>{project.description}</p>
		</div>
	);
};

export default ProjectCard;
