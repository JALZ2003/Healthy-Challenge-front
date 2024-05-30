/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {},
		screens: {
			'phone': '361px'
		}
	},
	variants: {},
	plugins: []
}
