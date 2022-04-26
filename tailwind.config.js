module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //Dark mode
        bg: '#282828',
        bgAlt: '#1d2021',
        primary: '#98971a',
        primaryAlt: '#98971a',
        light: '#ebdbb2',

        // Light mode
        liBg: '#b9cdda',
        liBgAlt: '#d7dae5',
        liPrimary: '#6b7d7d',
        liPrimaryAlt: '#8eaf9d',
        liLight: '#a6d8d4',
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
