import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import Slider from "./Slider";
import { useState, useEffect } from "react";

const ProjectPageCard = ({ project, number }) => {
	const [webAddress, setWebAddress] = useState(true);

	useEffect(() => {
		if (!project.website) {
			setWebAddress(false);
		}
	}, [project.website]);
	// if (project.website === "") return <div>I'm a project that doesn't have a website!</div>;
	return (
		<div className='proj-page-card hover:scale-105 ease-in-out duration-300 inline-block p-2 m-4'>
			<h1 className='proj-title px-4 font-bold'>{project.name}</h1>
			<p className='italic pl-8 py-2'>Languages: {project.languages}</p>
			<p className='italic pl-8 pb-2'>Technologies: {project.technologies}</p>
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

			<p className='whitespace-normal px-8 py-2'>{project.description}</p>
			<div className='link-container flex flex-row justify-center items-center p-2'>
				<a
					href={project.website}
					className={
						!webAddress
							? "hidden"
							: "modal-link underline m-2 hover:scale-105 ease-in-out duration-300"
					}
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
					<FaGithubSquare className='btn-icon hover:scale-105 ease-in-out duration-300' />
				</a>
			</div>
		</div>
	);
};

export default ProjectPageCard;
