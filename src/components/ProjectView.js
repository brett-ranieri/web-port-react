import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const ProjectView = ({ onOpen, setProjModalContent }) => {
	return (
		<div className='project main-view-comp'>
			<h1 className='marker p-3 text-4xl font-bold text-gray-900'>Highlighted Work</h1>
			<p className='p-3 text-l text-gray-900'>
				The slider below displays some of my favorite recent projects. Click on the screenshots of
				any project to learn more.
			</p>
			<Slider
				sliderType={1}
				sliderMove={370}
				onOpen={onOpen}
				setProjModalContent={setProjModalContent}
			/>
			<div className='flex-container btn-style'>
				<Link
					className='link-btn'
					to='/projects'
				>
					See all Projects
				</Link>
			</div>
		</div>
	);
};

export default ProjectView;
