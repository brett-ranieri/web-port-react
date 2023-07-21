import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";
import { HiDocumentDownload } from "react-icons/hi";

const ContactView = () => {
	let rotation = 0;
	const angle = 45;

	function rotateImage() {
		const rotated = document.getElementById("rotated");
		rotation = (rotation + angle) % 360;
		rotated.style.transform = `rotate(${rotation}deg)`;
	}

	return (
		<div className='contact main-view-comp'>
			<div className=' flex flex-col justify-center items-center pt-8'>
				<h1 className='marker text-dgreen drop-shadow-light text-5xl sm:text-6xl md:text-7xl'>
					Reach Out
				</h1>
				<p className='raleway text-dgreen text-base font-semibold p-3'>
					I look forward to hearing from you after you have had the time to review my portfolio
					page/projects.
				</p>
				<div className='photo-form-container'>
					<img
						id='rotated'
						src='./img/photo-of-brett.jpg'
						alt='brett pointing at sun'
						className='w-48 sm:w-60 md:w-80 m-3 rounded'
						onClick={() => rotateImage()}
					/>
				</div>
				<p className='raleway text-dgreen text-base font-semibold p-3'>
					{" "}
					Please contact me in whichever way is most convenient for you.
				</p>
				<div className='contact-links grid grid-cols-2 gap-3 sm:flex sm:flex-row justify-center items-center pt-2'>
					<a
						href='https://github.com/brett-ranieri'
						className='m-3 md:m-6 hover:scale-105 ease-in-out duration-300'
						target='_blank'
						rel='noreferrer'
					>
						<FaGithubSquare className='btn-icon' />
					</a>
					<a
						href='mailto:brett.ranieri@gmail.com'
						className='m-3 md:m-6 hover:scale-105 ease-in-out duration-300'
					>
						<MdOutlineEmail className='btn-icon' />
					</a>
					<a
						href='https://www.linkedin.com/in/brett-ranieri-bb9a6614/'
						className='m-3 md:m-6 hover:scale-105 ease-in-out duration-300'
						target='_blank'
						rel='noreferrer'
					>
						<FaLinkedin className='btn-icon' />
					</a>
					<a
						href='tel:6312785673'
						className='m-3 md:m-6 hover:scale-105 ease-in-out duration-300'
						target='_blank'
						rel='noreferrer'
					>
						<BsTelephoneOutbound className='tele-icon' />
					</a>
					<a
						href='/web-port-react/branieri_developer_resume_1.0.pdf'
						className='m-3 md:m-6 hover:scale-105 ease-in-out duration-300 flex flex-col justify-center'
						target='_blank'
						download
					>
						<HiDocumentDownload className='btn-icon' />
						<p className='text-center'>Resume</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactView;
