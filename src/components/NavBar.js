import { useState, useEffect } from "react";
import { Navbar, Collapse, Typography, Button, IconButton } from "@material-tailwind/react";
import { BiSearchAlt } from "react-icons/bi";
import { GiPineTree } from "react-icons/gi";
export default function NavBar({ scrollToSection, projects, about, contact, onOpen }) {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	/////////////////////// Brett Method - Random Picture ///////////////////////
	// const [previousChoosen, setPreviousChoosen] = useState("");
	// const [needChoosen, setNeedChoosen] = useState(false);

	// useEffect(() => {
	// 	console.log("choice made");
	// 	returnPicture(previousChoosen);
	// }, [previousChoosen]);

	// useEffect(() => {
	// 	if (needChoosen) {
	// 		console.log("still needed");
	// 		console.log(previousChoosen);
	// 		getPicture();
	// 		setNeedChoosen(false);
	// 	} else {
	// 	}
	// }, [needChoosen]);

	// const naturePictures = [254, 443, 567];

	// function randomPicture() {
	// 	console.log("rando");
	// 	const pictures = naturePictures;
	// 	let previous = previousChoosen;
	// 	let choosen = pictures[Math.floor(Math.random() * pictures.length)];
	// 	console.log("c ", choosen);
	// 	if (choosen === previous) {
	// 		setNeedChoosen(true);
	// 	} else {
	// 		setNeedChoosen(false);
	// 		setPreviousChoosen(choosen);
	// 	}
	// }

	// function getPicture() {
	// 	console.log("get");
	// 	randomPicture();
	// }

	// function returnPicture(picture) {
	// 	console.log("im returned ", picture);
	// 	return picture;
	// }
	/////////////////////////////////////////////////////////////////////////

	//////////////////////// Allison Method - Random Picture ////////////////////////////

	// const [useOne, setUseOne] = useState(true);

	// let arrayOne = [
	// 	{ id: 1, value: 1 },
	// 	{ id: 2, value: 2 },
	// 	{ id: 3, value: 3 },
	// 	{ id: 4, value: 4 },
	// 	{ id: 5, value: 5 },
	// ];
	// let arrayTwo = [];

	// function getPicture() {
	// 	if (useOne && arrayOne.length > 0) {
	// 		console.log("One ", arrayOne);
	// 		let choosen = arrayOne.splice(Math.floor(Math.random() * arrayOne.length), 1);
	// 		console.log(choosen);
	// 		arrayTwo.push({ id: choosen[0].id, value: choosen[0].value });
	// 		console.log("Two ", arrayTwo);
	// 	} else if (useOne && arrayOne.length === 0) {
	// 		console.log("ELSE IF!");
	// 		console.log("Two ", arrayTwo);
	// 		let choosen = arrayTwo.splice(Math.floor(Math.random() * arrayTwo.length), 1);
	// 		console.log(choosen);
	// 		arrayOne.push({ id: choosen[0].id, value: choosen[0].value });
	// 		console.log("One ", arrayOne);
	// 	} else if (!useOne) {
	// 		console.log("don't use one");
	// 		console.log("Two ", arrayTwo);
	// 		let choosen = arrayTwo.splice(Math.floor(Math.random() * arrayTwo.length), 1);
	// 		console.log(choosen);
	// 		arrayOne.push({ id: choosen[0].id, value: choosen[0].value });
	// 		console.log("One ", arrayOne);
	// 	}
	// }

	// function switchArray() {
	// 	if (useOne) {
	// 		setUseOne(false);
	// 	} else {
	// 		setUseOne(true);
	// 	}
	// }

	// function checkState() {
	// 	console.log("checking state ", useOne);
	// }

	// function checkTwo() {
	// 	console.log("checking Two ", arrayTwo);
	// }

	// function checkOne() {
	// 	console.log("checking One ", arrayOne);
	// }

	///////////////////////////////////////////////////////////////////////////////////

	////////////////////////////// BRETT Second Method ///////////////////////////////////

	const naturePictures = [
		{ id: 1, value: 1 },
		{ id: 2, value: 2 },
		{ id: 3, value: 3 },
		{ id: 4, value: 4 },
		{ id: 5, value: 5 },
	];

	let arrayOfSlices = [];

	function getPicture() {
		if (naturePictures.length > 0) {
			console.log("np ", naturePictures.length);
			let choosen = naturePictures.splice(Math.floor(Math.random() * naturePictures.length), 1);
			console.log(choosen[0].value);
			arrayOfSlices.push({ id: choosen[0].id, value: choosen[0].value });
			console.log("Two ", arrayOfSlices.length);
		} else if (naturePictures.length === 0) {
			console.log("you saw them all");
			window.location.reload();
		}
	}

	///////////////////////////////////////////////////////////////////////////////////////

	const navList = (
		<ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 font-normal'
			>
				<Button
					variant='gradient'
					size='sm'
					className='hidden lg:inline-block'
					onClick={() => {
						scrollToSection(projects);
					}}
				>
					Projects
				</Button>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 font-normal'
			>
				<Button
					variant='gradient'
					size='sm'
					className='hidden lg:inline-block'
					onClick={() => {
						scrollToSection(about);
					}}
				>
					About
				</Button>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 font-normal'
			>
				<Button
					variant='gradient'
					size='sm'
					className='hidden lg:inline-block'
					onClick={() => {
						scrollToSection(contact);
					}}
				>
					Contact
				</Button>
			</Typography>
		</ul>
	);

	return (
		<Navbar className='mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4'>
			<div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
				<Typography
					as='a'
					href='#'
					className='mr-4 cursor-pointer py-1.5 font-medium'
				>
					Brett Ranieri
				</Typography>
				<div className='hidden lg:block'>{navList}</div>
				<button
					className='hidden lg:inline-block nature-btn p-2'
					onClick={() => onOpen()}
				>
					<div className='flex flex-row justify-center items-center'>
						<BiSearchAlt className='menu-btn-icon' /> <GiPineTree className='menu-btn-icon' />
					</div>
				</button>
				{/* <Button
					variant='gradient'
					size='sm'
					className='hidden lg:inline-block'
					onClick={() => checkOne()}
				>
					<span>Check One</span>
				</Button> */}
				{/* <Button
					variant='gradient'
					size='sm'
					className='hidden lg:inline-block'
					onClick={() => checkTwo()}
				>
					<span>Check Two</span>
				</Button>
				<Button
					variant='gradient'
					size='sm'
					className='hidden lg:inline-block'
					onClick={() => checkState()}
				>
					<span>Check State</span>
				</Button> */}
				<IconButton
					variant='text'
					className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							className='h-6 w-6'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<div className='container mx-auto'>
					<Button
						variant='gradient'
						size='sm'
						className='mb-2'
						onClick={() => {
							scrollToSection(projects);
						}}
					>
						Projects
					</Button>
					<Button
						variant='gradient'
						size='sm'
						className='mb-2 ml-2'
						onClick={() => {
							scrollToSection(about);
						}}
					>
						About
					</Button>
					<Button
						variant='gradient'
						size='sm'
						className='mb-2 ml-2'
						onClick={() => {
							scrollToSection(contact);
						}}
					>
						Contact
					</Button>
					<button
						variant='gradient'
						size='sm'
						className='mb-2 ml-2 nature-btn p-2 flex flex-row justify-center items-center'
						onClick={() => onOpen()}
					>
						<BiSearchAlt className='menu-btn-icon' /> <GiPineTree className='menu-btn-icon' />
					</button>
				</div>
			</Collapse>
		</Navbar>
	);
}
