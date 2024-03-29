import { useState, useEffect } from "react";
import { Collapse, Button, IconButton } from "@material-tailwind/react";
import { BiSearchAlt } from "react-icons/bi";
import { GiPineTree } from "react-icons/gi";
import { TfiGallery } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function NavBar({ scrollToSection, projects, about, contact, onOpen }) {
	const [openNav, setOpenNav] = useState(false);
	const [logoFont, setLogoFont] = useState(0);

	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	function changeLogo() {
		if (logoFont === 5) {
			setLogoFont(0);
		} else {
			let currentFont = logoFont;
			setLogoFont(currentFont + 1);
		}
	}

	const navList = (
		<ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 md:flex-row md:items-center md:gap-6'>
			<Button
				className='secondary-btn hidden md:inline-block'
				onClick={() => {
					scrollToSection(projects);
				}}
			>
				Projects
			</Button>
			<Button
				className='secondary-btn hidden md:inline-block'
				onClick={() => {
					scrollToSection(about);
				}}
			>
				About
			</Button>
			<Button
				className='secondary-btn hidden md:inline-block'
				onClick={() => {
					scrollToSection(contact);
				}}
			>
				Contact
			</Button>
		</ul>
	);

	return (
		<div className='navbar-container mx-auto max-w-screen-3xl'>
			<div className='navbar container mx-auto flex items-center justify-between text-blue-gray-900'>
				<button
					className={
						logoFont === 1
							? "logo-two"
							: logoFont === 2
							? "logo-three"
							: logoFont === 3
							? "logo-four"
							: logoFont === 4
							? "logo-five"
							: logoFont === 5
							? "logo-six"
							: "logo-one"
					}
					onClick={() => changeLogo()}
				>
					<p className='logo-text px-4'>BR</p>
				</button>
				<div className='hidden md:block'>{navList}</div>
				<div className='flex flex-row justify-center items-end'>
					<Link
						className='hidden md:inline-block primary-btn p-3 mr-3 hover:scale-105'
						to='/picture_gallery'
					>
						<div className='flex flex-row justify-center items-center'>
							<TfiGallery className='menu-btn-icon' />
						</div>
					</Link>

					<Button
						className='hidden md:inline-block nature-btn p-3'
						onClick={() => onOpen()}
					>
						<div className='flex flex-row justify-center items-center'>
							<BiSearchAlt className='menu-btn-icon' /> <GiPineTree className='menu-btn-icon' />
						</div>
					</Button>
				</div>

				<IconButton
					variant='text'
					className='ml-auto px-8 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden'
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
				<div className='container mx-auto flex flex-col justify-center items-center'>
					<div className='flex flex-row'>
						<Link
							className='raleway text-dgreen font-semibold hover:text-lgreen mb-1 mx-2'
							onClick={() => {
								scrollToSection(projects);
							}}
						>
							Projects
						</Link>
						<Link
							className='raleway font-semibold text-dgreen hover:text-lgreen mb-1 mx-2'
							onClick={() => {
								scrollToSection(about);
							}}
						>
							About
						</Link>
						<Link
							className='raleway font-semibold text-dgreen hover:text-lgreen mb-2 mx-2'
							onClick={() => {
								scrollToSection(contact);
							}}
						>
							Contact
						</Link>
					</div>

					<div className='flex flex-row'>
						<Link
							className='primary-btn mb-5 mx-2 p-2.5 hover:scale-105'
							to='/picture_gallery'
						>
							<div className='flex flex-row justify-center items-center'>
								<TfiGallery className='menu-btn-icon' />
							</div>
						</Link>
						<Button
							className='nature-btn p-2.5 flex flex-row justify-center items-center mb-5 mx-2'
							onClick={() => onOpen()}
						>
							<BiSearchAlt className='menu-btn-icon' /> <GiPineTree className='menu-btn-icon' />
						</Button>
					</div>
				</div>
			</Collapse>
		</div>
	);
}
