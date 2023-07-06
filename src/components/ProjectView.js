import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const ProjectView = ({ onOpen, modControl }) => {
	return (
		<div className='project main-view-comp'>
			<h1 className='marker ml-1 section-title pt-6 px-4 font-bold'>Highlighted Work</h1>
			<p className='p-3 ml-6 section-text'>
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
					className='secondary-btn py-3 px-6 mt-2'
					to='/projects'
				>
					See all Projects
				</Link>
			</div>
		</div>
	);
};

export default ProjectView;
