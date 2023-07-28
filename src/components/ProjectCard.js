import React from "react";

const ProjectCard = ({ project, onOpen, modControl }) => {
	const clickEvent = () => {
		modControl(project, project.number);
		onOpen();
	};

	return (
		<>
			<div className='w-[75vw] sm:w-[55vw] md:w-[45vw] lg:w-[40vw] h-[400px] mx-2.5 my-4 p-2 proj-card'>
				<h1 className='text-2xl md:text-3xl lg:text-4xl drop-shadow-dark marker px-3 py-1'>
					{project.name}
				</h1>
				<p className='italic section-text'>Languages: {project.languages}</p>
				<div className='flex justify-center items-center pb-2'>
					<img
						className='w-[65vw] sm:w-[45vw] md:w-[35vw] lg:w-[30vw] cursor-pointer hover:scale-75 ease-in-out duration-300'
						src={project.images[0].source}
						alt={project.images[0].alt}
						onClick={() => clickEvent()}
					/>
				</div>

				<p className='whitespace-normal section-text'>{project.shortDescription}</p>
			</div>
		</>
	);
};

export default ProjectCard;
