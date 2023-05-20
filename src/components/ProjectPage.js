import React from "react";
import ProjectCard from "./ProjectCard";
import { data } from "../projectData";

const ProjectPage = () => {
	return (
		<div>
			<h1>Howdy, I'm the Project Page</h1>
			<div className='relative flex items-center'>
				<div
					id='slider'
					className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll smooth'
				>
					{data.map((project) => (
						<ProjectCard
							project={project}
							key={project.number}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;
