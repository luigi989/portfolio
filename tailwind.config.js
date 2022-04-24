module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        bg: '#282828',
        bgAlt: '#1d2021',
        primary: '#98971a',
        primaryAlt: '#98971a',
        light: '#ebdbb2',

        // === Original color scheme ===ct
        // bg: '#1f1f38',
        // bgAlt: '#2c2c6c',
        // primary: '#4db5ff66',
        // primaryAlt: '#4db5ff',
        // light: '#ffffff99'
      },
      textColor: {
        primary: '#98971a',
      },
      backgroundImage: {
        'bg-texture': "url('../src/assets/bg-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}
