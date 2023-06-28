import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import Slider from "./Slider";

const ProjectPageCard = ({ project, number }) => {
	// if (project.website === "") return <div>I'm a project that doesn't have a website!</div>;
	return (
		<div className='proj-page-card inline-block p-2 m-4'>
			<h1 className='proj-title'>{project.name}</h1>
			<p className='italic'>Languages: {project.languages}</p>
			<p className='italic'>Technologies: {project.technologies}</p>
			{/* <div className='img-container flex flex-row justify-center p-2'>
				{project.images.map((image) => (
					<img
						className='h-[250px] hover:scale-105 ease-in-out duration-300 m-2'
						src={image.source}
						alt={image.alt}
					/>
				))}
			</div> */}

			<Slider
				sliderType={2}
				sliderMove={300}
				project={project}
				number={number}
			/>

			<p className='whitespace-normal'>{project.description}</p>
			<div className='link-container flex flex-row justify-center items-center p-2'>
				<a
					href={project.website}
					className='m-2'
					target='_blank'
					rel='noreferrer'
				>
					Live Website
				</a>
				<a
					href={project.gitLink}
					className='m-2'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithubSquare className='btn-icon' />
				</a>
			</div>
		</div>
	);
};

export default ProjectPageCard;
