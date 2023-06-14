import { useState, useEffect } from "react";
import { Navbar, Collapse, Typography, Button, IconButton } from "@material-tailwind/react";

export default function NavBar({ scrollToSection, projects, about, contact }) {
	const [openNav, setOpenNav] = useState(false);
	const [previousChoosen, setPreviousChoosen] = useState("");
	const [needChoosen, setNeedChoosen] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	useEffect(() => {
		console.log("choice made");
		returnPicture(previousChoosen);
	}, [previousChoosen]);

	useEffect(() => {
		if (needChoosen) {
			console.log("still needed");
			console.log(previousChoosen);
			getPicture();
			setNeedChoosen(false);
		} else {
		}
	}, [needChoosen]);

	const naturePictures = [254, 443, 567, 889];

	function randomPicture() {
		console.log("rando");
		const pictures = naturePictures;
		let previous = previousChoosen;
		let choosen = pictures[Math.floor(Math.random() * pictures.length)];
		if (choosen === previous) {
			setNeedChoosen(true);
		} else {
			setNeedChoosen(false);
			setPreviousChoosen(choosen);
		}
	}

	function getPicture() {
		console.log("get");
		randomPicture();
	}

	function returnPicture(picture) {
		console.log("im returned ", picture);
		return picture;
	}
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
				<Button
					variant='gradient'
					size='sm'
					className='hidden lg:inline-block'
					onClick={() => getPicture()}
				>
					<span>Give me some nature!</span>
				</Button>
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
					<Button
						variant='gradient'
						size='sm'
						className='mb-2 ml-2'
						onClick={() => {}}
					>
						Give Me Some Nature!
					</Button>
				</div>
			</Collapse>
		</Navbar>
	);
}
