import React from "react";
import ProjectPageCard from "./ProjectPageCard";
import { Link } from "react-router-dom";

const Modal = ({ isVisible, onClose, projModalContent }) => {
	const handleClose = (e) => {
		if (e.target.id === "projWrapper") onClose();
	};

	if (!isVisible) return null;

	return (
		<>
			<div
				className='project-modal fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center modal-open'
				id='projWrapper'
				onClick={handleClose}
			>
				<div className='w-[85vw] flex flex-col proj-modal-container rounded'>
					<ProjectPageCard project={projModalContent} />
					<div className='flex-container proj-modal-btn-style mt-0'>
						<Link
							className='link-btn'
							to='/projects'
						>
							See all Projects
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
