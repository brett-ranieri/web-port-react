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
					className='secondary-btn py-2 px-4'
					to='/'
					onClick={console.log("clicked")}
				>
					Back to Main
				</Link>
			</div>

			<div className='proj-container'>
				<h1 className='section-title marker light-shadow mt-3 pl-6'>Full List of Projects</h1>
				<p className='section-text pl-10 pb-6 light'>
					Scroll down to browse all of my projects. The cards on this page contain more details as
					well as links to view the GitHub Repo and Live Website (if applicable) of each project.
				</p>
				{/* <Button onClick={handleState}>Set State</Button>
			<Button onClick={logState}>Log State</Button> */}
				<div className='flex-container'>
					{data.map((project) => (
						<React.Fragment key={project.number}>
							<ProjectPageCard
								project={project}
								number={project.number}
							/>
						</React.Fragment>
					))}
				</div>
				<ScrollToTop />
			</div>
		</div>
	);
};

export default ProjectsPage;
