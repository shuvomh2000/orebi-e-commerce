module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: '1604px',
      },
      colors: {
        'bl': '#262626',
        'wh_opacity': 'rgba(255, 255, 255,.7)',
      },
    },
  },
  plugins: [],
}