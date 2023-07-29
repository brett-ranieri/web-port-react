import React from "react";
import ProjectPageCard from "./ProjectPageCard";
import { data } from "../projectData";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";

const ProjectsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className='bg-lgreen'>
			<div className='pb-[70px]'>
				<Link
					className='secondary-btn absolute top-[15px] right-[15px] px-3 py-2'
					to='/'
				>
					Back to Main
				</Link>
			</div>

			<div className=''>
				<h1 className='text-5xl sm:text-6xl md:text-7xl text-dgreen marker drop-shadow-tan px-6 pb-4'>
					Full List of Projects
				</h1>
				<p className='text-sm md:text-base raleway font-semibold text-tan text-center px-4 md:text-start md:px-10 pb-4 light'>
					Scroll down to browse all of my projects. The cards on this page contain more details as
					well as links to view the GitHub Repo and Live Website (if applicable) of each project.
				</p>

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
