import React from "react";
import { useState, useEffect } from "react";
import { natureImages, endImage, againImage, firstClickImage } from "../projectImages";
import { GiFootsteps, GiCampingTent } from "react-icons/gi";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const NatureModal = ({ isVisible, onClose }) => {
	const [firstClick, setFirstClick] = useState(true);
	const [finalSlide, setFinalSlide] = useState(false);
	const [backAgain, setBackAgain] = useState(false);
	const [reload, setReload] = useState(1);
	const [naturePictures, setNaturePictures] = useState([]);

	useEffect(() => {
		setNaturePictures(fillArray(natureImages));
	}, [reload]);

	const [content, setContent] = useState(firstClickImage);

	const handleClose = (e) => {
		if (e.target.id === "wrapper") onClose();
	};

	function fillArray(source) {
		return JSON.parse(JSON.stringify(source));
	}

	function handleFirstClick() {
		setFirstClick(false);
		getPicture();
	}

	function handleReset() {
		setReload(Math.random());
		setFinalSlide(false);
		setBackAgain(true);
		setContent(againImage);
		onClose();
	}

	function getPicture() {
		if (naturePictures.length === 0) {
			setContent(endImage);
			setFinalSlide(true);
		} else {
			let choosen = naturePictures.splice(Math.floor(Math.random() * naturePictures.length), 1);
			setContent(choosen[0]);
			setBackAgain(false);
			setFirstClick(false);
		}
	}

	if (!isVisible) return null;

	return (
		<>
			{firstClick ? (
				<div
					className='nature-modal fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center modal-open'
					id='wrapper'
					onClick={handleClose}
				>
					<div className='modal-container w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] h-auto flex flex-col text-tan bg-lgreen border-4 border-solid border-dgreen rounded'>
						<div className='p-2 rounded'>
							<h3 className='raleway font-bold text-xl sm:text-3xl px-2'>
								Looking for some nature?
							</h3>
							<div className='float-container'>
								<img
									src={content.image}
									alt={content.alt}
									className='first-click-img rounded nature-img ml-2 mr-4 mt-4'
								/>

								<div className='raleway font-semibold text-sm sm:text-base p-2 m-1'>
									<p>
										This modal adventure will show you some photos from a trip my wife and I took to
										Rocky Mountain National Park. All photos are stored in an array, as you "hike"
										this array is spliced at a random point and the choosen image will be presented.
										With each step, another image is spliced from the array until there's none left!
										<br />
										<br />
										If you feel like taking a virtual hike press on the footsteps. At any point you
										can head back to camp and close the modal by clicking the tent.
									</p>
								</div>
							</div>

							<div className='flex flex-row justify-around p-3'>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={onClose}
								>
									<GiCampingTent className='h-[50px] w-[50px]' />
								</button>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={handleFirstClick}
								>
									<GiFootsteps className='h-[50px] w-[50px]' />
								</button>
							</div>
						</div>
					</div>
				</div>
			) : finalSlide ? (
				<div
					className='nature-modal fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
					id='wrapper'
					onClick={handleClose}
				>
					<div className='modal-container w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] h-auto flex flex-col text-tan bg-lgreen border-4 border-solid border-dgreen rounded'>
						<div className='p-2 rounded'>
							<h3 className='raleway font-bold text-xl sm:text-3xl px-2'>You've done it!</h3>
							<div>
								<img
									src={content.image}
									alt={content.alt}
									className='last-click-img rounded nature-img m-2'
								/>
								<div>
									<p className='raleway font-semibold text-sm sm:text-base p-2 pl-4'>
										You've made it to the final image! At this point that array of pictures has a
										length of zero...it's the only way you'd see this content.
										<span className='font-bold'> IF</span> you were to close the modal now and click
										the button in the NavBar again something new will happen...just saying.
										<br />
										<br />
										Clicking on the GitHub link below will take you to the repo for this project
										(specifically the code for this NatureModal component). Of course, you can click
										on the tent to close the modal and keep exploring elsewhere.
									</p>
								</div>
							</div>
							<div className='flex flex-row justify-around items-center p-3 h-[116px]'>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={handleReset}
								>
									<GiCampingTent className='h-[50px] w-[50px]' />
								</button>
								<a
									href='https://github.com/brett-ranieri/web-port-react/blob/main/src/components/NatureModal.js'
									className='m-6 hover:scale-105 ease-in-out duration-300'
									target='_blank'
									rel='noreferrer'
								>
									<FaGithubSquare className='h-[70px] w-[70px] hover:text-dgreen' />
								</a>
							</div>
						</div>
					</div>
				</div>
			) : backAgain ? (
				<div
					className='nature-modal fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
					id='wrapper'
					onClick={handleClose}
				>
					<div className='modal-container w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] h-auto flex flex-col text-tan bg-lgreen border-4 border-solid border-dgreen rounded'>
						<div className='p-2 rounded'>
							<h3 className='raleway font-bold text-xl sm:text-3xl px-2'>
								WOAH, didn't see you there!
							</h3>
							<div>
								<img
									src={content.image}
									alt={content.alt}
									className='repeat-img rounded nature-img ml-2 mr-4 mt-4'
								/>
								<div className='raleway font-semibold text-sm sm:text-base p-2 pl-8'>
									<p>
										Snuck right up on us...we didn't expect you back. Feel free to take another
										hike, but the pictures are all the same.
										<br />
										<br />
										<span className='italic'>
											*SPOILER ALERT*
											<br />
											That array of pictures has been re-populated and will appear in a new order.
											Ta-da!
										</span>
										<br />
										<br />
										Maybe you want to spend some time checking out my{" "}
										<Link
											className='hover:text-dgreen font-bold underline'
											to='/projects'
											onClick={onClose}
										>
											projects?
										</Link>
										<br />
										The{" "}
										<Link
											className='hover:text-dgreen font-bold underline'
											to='/picture_gallery'
											onClick={onClose}
										>
											Gallery
										</Link>{" "}
										also has some more nature pictures.
									</p>
								</div>
							</div>

							<div className='flex flex-row justify-around p-3'>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={onClose}
								>
									<GiCampingTent className='h-[50px] w-[50px]' />
								</button>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={getPicture}
								>
									<GiFootsteps className='h-[50px] w-[50px]' />
								</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					className='nature-modal fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
					id='wrapper'
					onClick={handleClose}
				>
					<div className='modal-container w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] h-auto flex flex-col text-tan bg-lgreen border-4 border-solid border-dgreen rounded'>
						<div className='p-2 rounded'>
							<h3 className='raleway font-bold text-xl sm:text-3xl px-2'>We're on an ADVENTURE!</h3>
							<div className='flex justify-center items-center p-2'>
								<img
									src={content.image}
									alt={content.alt}
									className='h-[45vh] rounded nature-img'
								/>
							</div>
							<div className='flex flex-row justify-normal p-2'>
								<p className='raleway font-semibold text-sm sm:text-base'>{content.blurb}</p>
							</div>
							<div className='flex flex-row justify-around p-3'>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={onClose}
								>
									<GiCampingTent className='h-[50px] w-[50px]' />
								</button>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={getPicture}
								>
									<GiFootsteps className='h-[50px] w-[50px]' />
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default NatureModal;
