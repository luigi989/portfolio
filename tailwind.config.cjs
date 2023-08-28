const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //Dark mode
        "bg": '#282828',
        "bgAlt": '#1d2021',
        "primary": '#98971a',
        "primaryAlt": '#BCBC20',
        "light": '#ebdbb2',

        // Light mode
        "liBg": '#e5e5f7',
        "liBgAlt": '#e4e5f1',
        "liPrimary": '#d2d3db',
        "liSec": "#444764",
        "liLight": '#333333',
      },
      textColor: {
        'primary': '#98971a',
      },
      backgroundImage: {
        'bgTexture': "url('/bg-texture.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
}

