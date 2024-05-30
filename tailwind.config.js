/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif']
        }
      },
        screens: {
			'phone': '361px'
		}
  },
  variants: {},
  plugins: []
}
