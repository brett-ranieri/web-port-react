import React from "react";

const ProjectPageCard = ({ project }) => {
	return (
		<div className='proj-page-card inline-block p-2'>
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

export default ProjectPageCard;
