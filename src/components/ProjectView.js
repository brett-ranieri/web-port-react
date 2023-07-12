import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const ProjectView = ({ onOpen, modControl }) => {
	return (
		<div className='project main-view-comp'>
			<h1 className='marker ml-1 section-title pt-6 px-4'>Highlighted Work</h1>
			<p className='p-3 ml-6 section-text dark'>
				The slider below displays some of my favorite recent projects. Click on the screenshots of
				any project to learn more.
			</p>
			<Slider
				sliderType={1}
				sliderMove={370}
				onOpen={onOpen}
				modControl={modControl}
			/>
			<div className='flex-container btn-style'>
				<Link
					className='secondary-btn py-3 px-6 mt-3 mb-5'
					to='/projects'
				>
					See all Projects
				</Link>
			</div>
			<div className='b-green'>
				<h1 className='marker ml-1 section-subtitle pt-3 px-4 light'>Current Project:</h1>
				<p className='p-4 pb-6 ml-6 section-text light'>
					I am learning Python as I work through the final module of my bootcamp offered by
					<a
						href='https://careerfoundry.com/'
						className='port-link px-1 underline'
					>
						CareerFoundry
					</a>
				</p>
			</div>
			<div className='b-light'>
				<h1 className='marker ml-1 section-subtitle pt-3 px-4 dark'>
					Familiar Languages/Technologies:
				</h1>
				<ul className='p-3 ml-6 section-text flex flex-row flex-wrap dark'>
					<li className='p-3'>Node</li>
					<li className='p-3'>JavaScript</li>
					<li className='p-3'>HTML</li>
					<li className='p-3'>CSS</li>
					<li className='p-3'>MongoDB</li>
					<li className='p-3'>SQL</li>
					<li className='p-3'>Express</li>
					<li className='p-3'>React</li>
					<li className='p-3'>React Bootstrap</li>
					<li className='p-3'>SASS</li>
					<li className='p-3'>Angular</li>
					<li className='p-3'>Python</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectView;
