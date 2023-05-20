import React from "react";
import ProjectCard from "./ProjectCard";
import { data } from "../projectData";

const ProjectPage = () => {
	return (
		<div className='project'>
			<h1>Howdy, I'm the Project Page</h1>
			{data.map((project) => (
				<ProjectCard
					project={project}
					key={project.number}
				/>
			))}
		</div>
	);
};

export default ProjectPage;
