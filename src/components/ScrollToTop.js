import React, { useState, useEffect } from "react";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const ScrollToTop = () => {
	const [showScrollTopButton, setShowScrollTopButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				console.log("i moved");
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
					className='scroll-btn-position scroll-btn-style'
					onClick={scrollToTop}
				/>
			)}
		</div>
	);
};

export default ScrollToTop;
