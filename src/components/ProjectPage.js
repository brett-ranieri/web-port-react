import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
	const projects = [
		{
			name: "First Project",
			languages: "HTML, CSS",
			number: 1,
		},
		{
			name: "Second Project",
			languages: "JavaScript",
			number: 2,
		},
		{
			name: "Third Project",
			languages: "React",
			number: 3,
		},
		{
			name: "Third Project",
			languages: "React",
			number: 4,
		},
	];

	return (
		<div className='project'>
			<h1>Howdy, I'm the Project Page</h1>
			{projects.map((project) => (
				<ProjectCard
					project={project}
					key={project.number}
				/>
			))}
		</div>
	);
};

export default ProjectPage;
