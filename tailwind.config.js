/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/*.{html,js}"],
	theme: {
		colors: {
			navy: "#1B244A",
			"off-white": "#EEE",
			coral: "#F94F6D",
			black: "#080001",
			lavender: "#9AABD8",
			green: "#34D399",
		},
		fontFamily: {
			sans: ["'Rethink Sans', sans-serif"],
			mono: ["'VT323', monospace"],
		},
		extend: {},
	},
	plugins: [],
};
