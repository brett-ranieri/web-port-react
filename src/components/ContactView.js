import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";

const ContactView = () => {
	return (
		<div className='contact main-view-comp flex flex-col justify-center items-center p-6'>
			<h1 className='marker p-3 text-4xl font-bold text-gray-900'>Reach Out</h1>
			<p className='p-3 text-l text-gray-900'>
				I look forward to hearing from you after you have had the time to review my portfolio
				page/projects.
			</p>
			<div className='photo-form-container'>
				<img
					src='./img/photo-of-brett.jpg'
					alt='brett pointing at sun'
					className='w-[30vw] max-w-xs m-3 rounded'
				/>
			</div>
			<p className='p-3 text-l text-gray-900'>
				{" "}
				Please contact me in whichever way is most convenient for you.
			</p>
			<div className='contact-links flex flex-row justify-center items-center p-6'>
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
			</div>
		</div>
	);
};

export default ContactView;
