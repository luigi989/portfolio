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
        "primaryAlt": '#98971a',
        "light": '#ebdbb2',

        // Light mode
        "liBg": '#e5e5f7',
        "liBgAlt": '#e4e5f1',
        "liPrimary": '#d2d3db',
        "liSec": "#484b6a",
        "liLight": '#9394a5',
      },
      textColor: {
        primary: '#98971a',
      },
      backgroundImage: {
        'bgTexture': "url('../src/assets/bg-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}
