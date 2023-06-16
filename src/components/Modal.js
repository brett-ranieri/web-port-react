import React from "react";
import { useState, useEffect } from "react";
import { natureImages, startImage, endImage, againImage, firstClickImage } from "../projectImages";
import { GiFootsteps, GiCampingTent } from "react-icons/gi";

const Modal = ({ isVisible, onClose }) => {
	const [firstClick, setFirstClick] = useState(true);
	const [finalSlide, setFinalSlide] = useState(false);
	const [backAgain, setBackAgain] = useState(false);
	const [reload, setReload] = useState(1);
	const [naturePictures, setNaturePictures] = useState([]);

	useEffect(() => {
		console.log("used ");
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
		setContent(startImage);
		console.log(naturePictures.length);
	}

	function handleReset() {
		console.log("reloaded");
		setReload(Math.random());
		setFirstClick(true);
		setFinalSlide(false);
		setBackAgain(true);
		setContent(againImage);
		onClose();
	}

	function getPicture() {
		console.log("images ", naturePictures.length);
		if (naturePictures.length === 0) {
			console.log("spot 12");
			setContent(endImage);
			setFinalSlide(true);
		} else {
			let choosen = naturePictures.splice(Math.floor(Math.random() * naturePictures.length), 1);
			setContent(choosen[0]);
			setBackAgain(false);
			setFirstClick(false);
			console.log(choosen[0].id);
			console.log("np ", naturePictures.length);
			console.log("org ", natureImages.length);
		}
	}

	function checkArray() {
		console.log("checking ", naturePictures);
	}

	if (!isVisible) return null;

	if (finalSlide)
		return (
			<div
				className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
				id='wrapper'
				onClick={handleClose}
			>
				<div className='w-[60vw] flex flex-col modal-container rounded'>
					<div className='p-2 rounded'>
						<h3 className='text-xl font-semibold mb-2'>That's all there is to see!</h3>
						<div className='flex justify-center items-center p-2'>
							<img
								src={content.image}
								alt={content.alt}
								className='h-[45vh] rounded shadow-2xl'
							/>
						</div>
						<p className='p-2'>{content.blurb}</p>
						<div className='flex flex-row justify-center p-2'>
							<button
								className='modal-btn-style flex justify-center items-center p-2 shadow hover:shadow-2xl'
								onClick={handleReset}
							>
								Let's head back to camp! <GiCampingTent className='footsteps place-self-end' />
							</button>
						</div>
					</div>
				</div>
			</div>
		);

	if (backAgain)
		return (
			<div
				className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
				id='wrapper'
				onClick={handleClose}
			>
				<div className='w-[85vw] flex flex-col modal-container rounded'>
					<div className='p-2 rounded'>
						<h3 className='text-xl font-semibold text-grat-900 mb-2'>
							WOAH, didn't see you there!
						</h3>
						<div className='flex justify-center items-center p-2'>
							<img
								src={content.image}
								alt={content.alt}
								className='h-[50vh] rounded'
							/>
						</div>
						<p className='p-2'>
							Snuck right up on us...we didn't expect you back here. You're welcome to take another
							hike, but you're not going to see anything new.
							<br />
							<span className='italic'>
								*SPOILER ALERT*
								<br />
								The array of pictures has been re-populated and will appear in a new order.
							</span>
						</p>
						<p>Maybe you want to spend some time checking out myu projects?</p>
						<p>The gallery also has A LOT more nature pictures</p>
						<div className='flex flex-row justify-around p-3'>
							<button
								className='modal-btn-style flex justify-center items-center p-2'
								onClick={onClose}
							>
								Maybe I'll stay at camp... <GiCampingTent className='footsteps place-self-end' />
							</button>
							<button
								className='modal-btn-style flex justify-center items-center p-2'
								onClick={getPicture}
							>
								Another Hike Please! <GiFootsteps className='footsteps place-self-end' />
							</button>
						</div>
					</div>
				</div>
			</div>
		);

	return (
		<>
			{firstClick ? (
				<div
					className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center modal-open'
					id='wrapper'
					onClick={handleClose}
				>
					<div className='w-[85vw] flex flex-col modal-container rounded'>
						<div className='p-2 rounded'>
							<h3 className='text-xl font-semibold text-grat-900 mb-2'>
								I hear you're looking for some nature...
							</h3>
							<div className='flex justify-center items-center p-2'>
								<img
									src={content.image}
									alt={content.alt}
									className='h-[50vh] rounded shadow-2xl'
								/>
							</div>
							<div className='flex flex-row justify-normal p-2'>
								<p>
									My wife and I went on a camping trip to Rocky Mountain National Park and let me
									tell you, it was <span className='text-lg font-bold'>GORGEOUS!</span> If you feel
									like taking a virtual hike and seeing some of the beauty just press on the
									footsteps. Don't worry though, at any point you can head on back to camp by
									clicking the tent.
								</p>
							</div>
							<div className='flex flex-row justify-around p-3'>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={onClose}
								>
									Nah, I'm gonna stay at camp <GiCampingTent className='footsteps' />
								</button>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={handleFirstClick}
								>
									Let's Go! <GiFootsteps className='footsteps' />
								</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
					id='wrapper'
					onClick={handleClose}
				>
					<div className='w-auto flex flex-col modal-container rounded'>
						<div className='p-2 rounded'>
							<h3 className='text-xl font-semibold text-grat-900 mb-2'>We're on an ADVENTURE!</h3>
							<div className='flex justify-center items-center p-2'>
								<img
									src={content.image}
									alt={content.alt}
									className='h-[45vh] rounded nature-img'
								/>
							</div>
							<div className='flex flex-row justify-normal p-2'>
								<p>{content.blurb}</p>
							</div>
							<div className='flex flex-row justify-around p-3'>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={onClose}
								>
									<GiCampingTent className='tent' />
								</button>
								<button
									className='modal-btn-style flex justify-center items-center p-2'
									onClick={getPicture}
								>
									<GiFootsteps className='footsteps' />
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
