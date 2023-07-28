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
		<div className='proj-page-card w-[80vw] h-auto bg-tan text-dgreen border-4 border-solid border-dgreen rounded-md hover:scale-102 ease-in-out duration-300 inline-block p-2 m-4 scroll'>
			<h1 className='marker text-2xl sm:text-4xl px-4 py-2 drop-shadow-light'>{project.name}</h1>
			<p className='raleway text-sm sm:text-base italic pl-6 sm:pl-8 pt-1 font-bold'>
				{project.type}
			</p>
			<p className='raleway text-sm sm:text-base italic pl-6 sm:pl-8 py-2 font-semibold'>
				Languages: {project.languages}
			</p>
			<p className='raleway text-sm sm:text-base italic pl-6 sm:pl-8 pb-3 font-semibold'>
				Technologies: {project.technologies}
			</p>
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
				sliderMove={200}
				project={project}
				number={number}
			/>

			<p className='whitespace-normal raleway text-sm sm:text-base px-8 py-4 font-medium'>
				{project.description}
			</p>
			<p
				className={
					!specialMessage
						? "hidden"
						: "whitespace-normal raleway font-bold text-xs text-center py-2"
				}
			>
				{project.special}
			</p>
			<div className='flex flex-row justify-center items-center p-2'>
				<a
					href={project.website}
					className={
						!webAddress
							? "hidden"
							: "hover:text-lgreen underline m-2 hover:scale-105 ease-in-out duration-300"
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
					<FaGithubSquare className='hover:text-lgreen w-[70px] h-[70px] hover:scale-105 ease-in-out duration-300' />
				</a>
			</div>
		</div>
	);
};

export default ProjectPageCard;
