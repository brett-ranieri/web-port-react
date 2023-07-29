import React, { useState, useEffect } from "react";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const ScrollToTop = () => {
	const [showScrollTopButton, setShowScrollTopButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				setShowScrollTopButton(true);
			} else {
				setShowScrollTopButton(false);
			}
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			{showScrollTopButton && (
				<TbArrowBigUpLinesFilled
					className='fixed bottom-6 right-6 scroll-btn-style'
					onClick={scrollToTop}
				/>
			)}
		</div>
	);
};

export default ScrollToTop;
