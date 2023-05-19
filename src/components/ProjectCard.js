import React from "react";

const ProjectCard = ({ project }) => {
	return (
		<div className='card'>
			<h1>{project.name}</h1>
			<p>{project.languages}</p>
			<img
				src='https://placehold.co/300x150'
				alt='placeholder'
			/>
			<p>I'm a card for a project and I am here.</p>
		</div>
	);
};

export default ProjectCard;
