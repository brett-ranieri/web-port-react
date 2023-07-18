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
import NatureModal from "./components/NatureModal";
import Modal from "./components/Modal";

function App() {
	const projects = useRef(null);
	const about = useRef(null);
	const contact = useRef(null);
	const [showModal, setShowModal] = useState(false);
	const [showModal2, setShowModal2] = useState(false);
	const [projModalContent, setProjModalContent] = useState({});
	const [modNumber, setModNumber] = useState(0);

	////////////////////State for Project View////////////////////////
	// let [mainView, setMainView] = useState(false);

	// useEffect(() => {
	// 	console.log("reloaded");
	// 	window.location.reload(false);
	// }, []);

	// 	function handleState() {
	// 		setMainView(true);
	// 	}

	// 	function logState() {
	// 		console.log(mainView);
	// 	}

	useEffect(() => {
		if (showModal || showModal2) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [showModal, showModal2]);

	const modControl = (project, number) => {
		setProjModalContent(project);
		setModNumber(number);
	};

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		// <FullPageScroll />
		<BrowserRouter basename={process.env.PUBLIC_URL}>
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
							<NatureModal
								isVisible={showModal}
								onClose={() => {
									setShowModal(false);
								}}
							/>
							<Modal
								isVisible={showModal2}
								onClose={() => {
									setShowModal2(false);
								}}
								projModalContent={projModalContent}
								modNumber={modNumber}
							/>
							<div className='header-container'>
								<img
									src='%PUBLIC_URL%/img/home-banner.jpg'
									alt='brett standing looking out over mountains'
									className='w-full object-cover'
								/>
								<div className='marker header-text'>
									<h1 className='p-3 section-title'>Brett Ranieri</h1>
									<h3 className='ml-6 p-3 section-second'>Web Developer</h3>
								</div>
							</div>
							<div ref={projects}>
								<ProjectView
									onOpen={() => setShowModal2(true)}
									modControl={modControl}
								/>
							</div>
							<div ref={about}>
								<AboutView />
							</div>
							<div ref={contact}>
								<ContactView />
							</div>
							<div className='footer-container'>
								<img
									src='%PUBLIC_URL%/img/tree-banner.jpg'
									alt='layers of pine trees in fog'
									className='w-[100vw] h-[400px] object-cover'
								/>
								<div className='img-attribute'>
									Image by{" "}
									<a href='https://www.freepik.com/free-vector/forest-banners_793671.htm#query=trees&position=3&from_view=search&track=sph'>
										Freepik
									</a>
								</div>
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
