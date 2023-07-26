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
		<div className='bg-lgreen'>
			<Link
				className='secondary-btn absolute top-[15px] right-[20px] py-2 px-4'
				to='/'
				onClick={console.log("clicked")}
			>
				Back to Main
			</Link>

			<div>
				<h1 className='text-5xl sm:text-6xl md:text-7xl text-dgreen marker drop-shadow-tan pt-[70px] lg:pt-4 px-6 pb-4'>
					Full List of Projects
				</h1>
				<p className='text-sm md:text-base raleway font-semibold text-tan text-center px-4 md:text-start md:px-10 pb-4 light'>
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
