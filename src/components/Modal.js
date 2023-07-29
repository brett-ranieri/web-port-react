import React from "react";
import ProjectPageCard from "./ProjectPageCard";
import { Link } from "react-router-dom";

const Modal = ({ isVisible, onClose, projModalContent, modNumber }) => {
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
				<div className='w-[90vw] h-[80vh] proj-modal-container bg-lgreen border-4 border-solid border-tan rounded'>
					<div
						className='secondary-btn proj-modal-btn px-2 py-1 mb-2 text-xs'
						onClick={() => onClose()}
					>
						CLOSE
					</div>
					<div className='flex flex-col items-center'>
						<ProjectPageCard
							project={projModalContent}
							number={modNumber}
						/>
						<div className='flex-container proj-modal-btn-style mt-0'>
							<Link
								className='primary-btn px-4 py-2'
								to='/projects'
								onClick={onClose}
							>
								See all Projects
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
