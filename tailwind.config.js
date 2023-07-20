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
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
});
