import React from "react";
import ProjectCard from "./ProjectCard";
import { data } from "../projectData";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
// import { useEffect } from "react";

const ProjectsPage = () => {
	// useEffect(() => {
	// 	handleState();
	// });

	// function logState() {
	// 	console.log(mainView);
	// }

	return (
		<div>
			<h1 className='text-4xl font-bold text-gray-900'>Howdy, I'm the Project Page</h1>
			{/* <Button onClick={handleState}>Set State</Button>
			<Button onClick={logState}>Log State</Button> */}
			<div className='flex-container'>
				{data.map((project) => (
					<ProjectCard
						project={project}
						key={project.number}
					/>
				))}
			</div>
			<div className='flex-container btn-style'>
				<Button
					variant='gradient'
					size='md'
				>
					<Link to='/'>Back to Main</Link>
				</Button>
			</div>
		</div>
	);
};

export default ProjectsPage;
