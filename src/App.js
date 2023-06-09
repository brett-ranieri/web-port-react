// import FullPageScroll from "./components/FullPageScroll";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";
import { useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
	const projects = useRef(null);
	const about = useRef(null);
	const contact = useRef(null);

	const scrollToSection = (elementRef) => {
		console.log(elementRef);
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		// <FullPageScroll />
		<div>
			<NavBar
				scrollToSection={scrollToSection}
				projects={projects}
				about={about}
				contact={contact}
			/>
			<img
				src='https://placehold.co/800x300'
				alt='placeholder'
				className='w-full h-[100vh] object-cover'
			/>
			<div ref={projects}>
				<ProjectPage />
			</div>
			<div ref={about}>
				<AboutPage />
			</div>
			<div ref={contact}>
				<ContactPage />
			</div>
		</div>
	);
}

export default App;
