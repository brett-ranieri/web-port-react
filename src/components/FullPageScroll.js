import React from "react";
import Fullpage, {
	FullPageSections,
	FullpageSection,
	FullpageNavigation,
} from "@ap.cx/react-fullpage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";

const FullPageScroll = () => {
	const SectionStyle = {
		height: "100vh",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<div>
			<Fullpage>
				<FullpageNavigation />
				<FullPageSections>
					<FullpageSection>
						<h1>Screen 1</h1>
					</FullpageSection>
					<FullpageSection style={SectionStyle}>
						<ProjectPage />
					</FullpageSection>
					<FullpageSection style={SectionStyle}>
						<AboutPage />
					</FullpageSection>
					<FullpageSection style={SectionStyle}>
						<h1>Screen 4</h1>
					</FullpageSection>
				</FullPageSections>
			</Fullpage>
		</div>
	);
};

export default FullPageScroll;
