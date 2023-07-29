/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dgreen: "#2f341a",
				lgreen: "#5f6935",
				tan: "#fece7a",
				offwhite: "#faebd7",
			},
			dropShadow: {
				light: "6px 6px 5px #5f6935",
				dark: "6px 6px 5px #2f341a",
				tan: "3px 3px 5px #fece7a",
			},
			transitionProperty: {
				height: "height",
			},
			zIndex: {
				101: "101",
				102: "102",
				1000: "1000",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
});
