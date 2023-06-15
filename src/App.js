// import FullPageScroll from "./components/FullPageScroll";
import AboutView from "./components/AboutView";
import ProjectView from "./components/ProjectView";
import ContactView from "./components/ContactView";
import { useRef, useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import PictureGallery from "./components/PictureGallery";
// import { Button } from "@material-tailwind/react";
import Modal from "./components/Modal";

function App() {
	const projects = useRef(null);
	const about = useRef(null);
	const contact = useRef(null);
	const [showModal, setShowModal] = useState(false);

	////////////////////State for Project View////////////////////////
	// let [mainView, setMainView] = useState(false);

	// 	useEffect(() => {
	// 		setMainView(false);
	// 		console.log("used");
	// 	});

	// 	function handleState() {
	// 		setMainView(true);
	// 	}

	// 	function logState() {
	// 		console.log(mainView);
	// 	}

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		// <FullPageScroll />
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<div>
							<NavBar
								scrollToSection={scrollToSection}
								projects={projects}
								about={about}
								contact={contact}
								onOpen={() => setShowModal(true)}
							/>
							<Modal
								isVisible={showModal}
								onClose={() => {
									setShowModal(false);
								}}
							/>
							{/* <button onClick={() => setShowModal(true)}>Modal Test</button> */}
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
					}
				/>
				<Route
					path='/projects'
					element={
						<div>
							<ProjectsPage
							// handleState={handleState}
							// mainView={mainView}
							/>
						</div>
					}
				/>
				<Route
					path='/about'
					element={
						<div>
							<AboutPage
							// handleState={handleState}
							// mainView={mainView}
							/>
						</div>
					}
				/>
				<Route
					path='/picture_gallery'
					element={
						<div>
							<PictureGallery
							// handleState={handleState}
							// mainView={mainView}
							/>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
