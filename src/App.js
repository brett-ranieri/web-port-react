// import FullPageScroll from "./components/FullPageScroll";
import AboutView from "./components/AboutView";
import ProjectView from "./components/ProjectView";
import ContactView from "./components/ContactView";
import { useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

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
				<ProjectView />
			</div>
			<div ref={about}>
				<AboutView />
			</div>
			<div ref={contact}>
				<ContactView />
			</div>
			<ScrollToTop />
		</div>
	);
}

export default App;
