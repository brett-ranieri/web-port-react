import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";
import { HiDocumentDownload } from "react-icons/hi";

const ContactView = () => {
	return (
		<div className='contact main-view-comp flex flex-col justify-center items-center pt-8'>
			<h1 className='marker pt-3 section-title'>Reach Out</h1>
			<p className='pb-2 pt-4 section-text dark'>
				I look forward to hearing from you after you have had the time to review my portfolio
				page/projects.
			</p>
			<div className='photo-form-container'>
				<img
					src='./img/photo-of-brett.jpg'
					alt='brett pointing at sun'
					className='contact-photo w-[30vw] m-3 rounded'
				/>
			</div>
			<p className='section-text dark'>
				{" "}
				Please contact me in whichever way is most convenient for you.
			</p>
			<div className='contact-links flex flex-row justify-center items-center pt-2'>
				<a
					href='https://github.com/brett-ranieri'
					className='m-6 hover:scale-105 ease-in-out duration-300'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithubSquare className='btn-icon' />
				</a>
				<a
					href='mailto:brett.ranieri@gmail.com'
					className='m-6 hover:scale-105 ease-in-out duration-300'
				>
					<MdOutlineEmail className='btn-icon' />
				</a>
				<a
					href='https://www.linkedin.com/in/brett-ranieri-bb9a6614/'
					className='m-6 hover:scale-105 ease-in-out duration-300'
					target='_blank'
					rel='noreferrer'
				>
					<FaLinkedin className='btn-icon' />
				</a>
				<a
					href='tel:6312785673'
					className='m-6 hover:scale-105 ease-in-out duration-300'
					target='_blank'
					rel='noreferrer'
				>
					<BsTelephoneOutbound className='tele-icon' />
				</a>
				<a
					href='/BRanieri_Developer_Resume_1.0.pdf'
					className='m-6 hover:scale-105 ease-in-out duration-300 flex flex-col justify-center'
					target='_blank'
					download
				>
					<HiDocumentDownload className='btn-icon' />
					<p className='text-center'>Resume</p>
				</a>
			</div>
		</div>
	);
};

export default ContactView;
