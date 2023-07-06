import React from "react";

const ProjectCard = ({ project, onOpen, modControl }) => {
	const clickEvent = () => {
		modControl(project, project.number);
		onOpen();
	};

	return (
		<>
			<div className='w-[350px] h-[400px] mx-2.5 my-4 p-2 proj-card'>
				<h1 className='proj-title'>{project.name}</h1>
				<p className='italic'>Languages: {project.languages}</p>
				<div className='flex justify-center items-center pb-2'>
					<img
						className='w-[300px] cursor-pointer hover:scale-75 ease-in-out duration-300'
						src={project.images[0].source}
						alt={project.images[0].alt}
						onClick={() => clickEvent()}
					/>
				</div>

				<p className='whitespace-normal'>{project.shortDescription}</p>
			</div>
		</>
	);
};

export default ProjectCard;
