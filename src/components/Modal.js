import React from "react";
import { useState, useEffect } from "react";
import { natureImages, startImage, endImage, againImage } from "../projectImages";

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

	const [content, setContent] = useState(startImage.image);

	const handleClose = (e) => {
		if (e.target.id === "wrapper") onClose();
	};

	function fillArray(source) {
		return JSON.parse(JSON.stringify(source));
	}

	function handleFirstClick() {
		setFirstClick(false);
		console.log(naturePictures.length);
	}

	function handleReset() {
		console.log("reloaded");
		setReload(Math.random());
		setFirstClick(true);
		setFinalSlide(false);
		setBackAgain(true);
		setContent(againImage.image);
		onClose();
	}

	function getPicture() {
		console.log("images ", naturePictures.length);
		if (naturePictures.length === 0) {
			console.log("spot 12");
			setContent(endImage.image);
			setFinalSlide(true);
		} else {
			let choosen = naturePictures.splice(Math.floor(Math.random() * naturePictures.length), 1);
			setContent(choosen[0].image);
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
				<div className='w-[100vw] flex flex-col'>
					<button
						className='text-white text-xl place-self-end'
						onClick={onClose}
					>
						X
					</button>
					<div className='bg-white p-2 rounded'>
						<h3 className='text-xl font-semibold text-grat-900 mb-5'>Modal Title!</h3>
						<img
							src={content}
							alt='something'
							className='h-[50vh]'
						/>
						<p>You explored all there is to explore here!</p>
						<button
							className='text-black text-xl place-self-end'
							onClick={handleReset}
						>
							Reset
						</button>
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
				<div className='w-[100vw] flex flex-col'>
					<button
						className='text-white text-xl place-self-end'
						onClick={onClose}
					>
						X
					</button>
					<div className='bg-white p-2 rounded'>
						<h3 className='text-xl font-semibold text-grat-900 mb-5'>Modal Title!</h3>
						<img
							src={content}
							alt='something'
							className='h-[50vh]'
						/>
						<p>
							So you're back again? Just to warn, there's not much new to see here...although it
							will come at you in a different order
						</p>
						<p>Maybe you want to spend some time checking out myu projects?</p>
						<p>The gallery also has A LOT more nature pictures</p>
						<button
							className='text-black text-xl place-self-end'
							onClick={getPicture}
						>
							Another Hike Please!
						</button>
					</div>
				</div>
			</div>
		);

	return (
		<>
			{firstClick ? (
				<div
					className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
					id='wrapper'
					onClick={handleClose}
				>
					<div className='w-[40vw] flex flex-col'>
						<button
							className='text-white text-xl place-self-end'
							onClick={onClose}
						>
							X
						</button>
						<div className='bg-white p-2 rounded'>
							<h3 className='text-xl font-semibold text-grat-900 mb-5'>Modal Title First Click</h3>
							<button
								className='text-black text-xl place-self-end'
								onClick={handleFirstClick}
							>
								First Click Button!
							</button>
							<button
								className='text-black text-xl place-self-end'
								onClick={checkArray}
							>
								Check Array
							</button>
						</div>
					</div>
				</div>
			) : (
				<div
					className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
					id='wrapper'
					onClick={handleClose}
				>
					<div className='w-[100vw] flex flex-col'>
						<button
							className='text-white text-xl place-self-end'
							onClick={onClose}
						>
							X
						</button>
						<div className='bg-white p-2 rounded'>
							<h3 className='text-xl font-semibold text-grat-900 mb-5'>Modal Title Experiment</h3>
							<img
								src={content}
								alt='something'
							/>
							<button
								className='text-black text-xl place-self-end'
								onClick={getPicture}
							>
								Get New Picture
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
