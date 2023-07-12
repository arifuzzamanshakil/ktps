/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      fontFamily: {
        Rajdhani: "'Rajdhani', sans-serif",
        Inter: "'Inter', sans-serif"
      },

      dropShadow: {
        "5xl": [
          '0px 0px 20px rgba(255, 244, 0, 0.59)',
          '0px 0px 7px  rgba(255, 220, 0, 0.56)',
          '0px 0px 40px rgba(255, 231, 0, 0.47)',
          '1px 1px 1px #000'
        ],
        "6xl": ['0px 0px 4px #FF5AC0'],
        "7xl": ['0px 0px 10px rgba(255, 255, 255, 0.90)'],
        "8xl": ['0px 0px 15px rgba(255, 255, 255, 0.90)'],
        "9xl": ['0px 0px 11px rgba(255, 255, 255, 0.50)'],
        "10xl":[
          '0px 0px 23.01886749267578px rgba(255, 244, 0, 0.59)',
          '0px 0px 8.05660343170166px rgba(255, 220, 0, 0.56)',
          '0px 0px 46.03773498535156px rgba(255, 231, 0, 0.47)',
          '1.150943398475647px 1.150943398475647px 1.150943398475647px #000'
        ],
      },

    },
  },
  plugins: [],
}

