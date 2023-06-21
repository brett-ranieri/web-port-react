import React from "react";
import ProjectPageCard from "./ProjectPageCard";
import { data } from "../projectData";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";

const ProjectsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	// function logState() {
	// 	console.log(mainView);
	// }

	return (
		<div>
			<div className='flex-container proj-btn-container'>
				<Link
					className='link-btn'
					to='/'
					onClick={console.log("clicked")}
				>
					Back to Main
				</Link>
			</div>

			<div className='proj-container'>
				<h1 className='text-4xl font-bold text-gray-900'>Howdy, I'm the Project Page</h1>
				{/* <Button onClick={handleState}>Set State</Button>
			<Button onClick={logState}>Log State</Button> */}
				<div className='flex-container'>
					{data.map((project) => (
						<ProjectPageCard
							project={project}
							key={project.number}
						/>
					))}
				</div>
				<ScrollToTop />
			</div>
		</div>
	);
};

export default ProjectsPage;
