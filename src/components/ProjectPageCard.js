import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import Slider from "./Slider";
import { useState, useEffect } from "react";

const ProjectPageCard = ({ project, number }) => {
	const [webAddress, setWebAddress] = useState(true);
	const [specialMessage, setSpecialMessage] = useState(true);

	useEffect(() => {
		if (!project.website) {
			setWebAddress(false);
		}
		if (!project.special) {
			setSpecialMessage(false);
		}
	}, [project.website, project.special]);
	// if (project.website === "") return <div>I'm a project that doesn't have a website!</div>;
	return (
		<div className='proj-page-card hover:scale-102 ease-in-out duration-300 inline-block p-2 m-4'>
			<h1 className='proj-title px-4 font-bold'>{project.name}</h1>
			<p className='italic section-text pl-8 pt-1 font-bold'>{project.type}</p>
			<p className='italic section-text pl-8 py-2'>Languages: {project.languages}</p>
			<p className='italic section-text pl-8 pb-3'>Technologies: {project.technologies}</p>
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

			<p className='whitespace-normal section-text px-8 py-4'>{project.description}</p>
			<p
				className={
					!specialMessage ? "hidden" : "whitespace-normal section-text special-text pl-14 py-2"
				}
			>
				{project.special}
			</p>
			<div className='link-container flex flex-row justify-center items-center p-2'>
				<a
					href={project.website}
					className={
						!webAddress
							? "hidden"
							: "port-link underline m-2 hover:scale-105 ease-in-out duration-300"
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
					<FaGithubSquare className='port-link btn-icon hover:scale-105 ease-in-out duration-300' />
				</a>
			</div>
		</div>
	);
};

export default ProjectPageCard;
