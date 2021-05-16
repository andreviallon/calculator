module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1550px'
		}
	},
	fontFamily: {
		sans: ['Spartan', 'sans-serif']
	},
	variants: {
		extend: {},
	},
	plugins: [],
}