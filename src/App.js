import AboutView from "./components/AboutView";
import ProjectView from "./components/ProjectView";
import ContactView from "./components/ContactView";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage";
import PictureGallery from "./components/PictureGallery";
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

	useEffect(() => {
		if (showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [showModal]);

	return (
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
							<div className='header-container relative'>
								<img
									src='./img/home-banner.jpg'
									alt='brett standing looking out over mountains'
									className='w-full object-cover'
								/>
								<div className='marker header-text'>
									<h1 className='text-dgreen text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl absolute top-2 sm:top-4 md:top-10 2xl:top-20 right-1 sm:right-5 md:right-6 2xl:right-20'>
										Brett Ranieri
									</h1>
									<h3 className='text-lgreen text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl text-border-dgreen absolute top-12 sm:top-20 md:top-32 2xl:top-[200px] right-1 sm:right-5 md:right-6 2xl:right-20'>
										Web Developer
									</h3>
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
									src='./img/tree-banner.jpg'
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
							<ProjectsPage />
						</div>
					}
				/>
				<Route
					path='/picture_gallery'
					element={
						<div>
							<PictureGallery />
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
