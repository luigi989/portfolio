module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        bg: '#1f1f38',
        bgAlt: '#2c2c6c',
        primary: '#4db5ff66',
        primaryAlt: '#4db5ff',
        light: '#ffffff99'
      },
      backgroundImage: {
        'bg-texture': "url('../src/assets/bg-texture.png')",
      },
    },
  },
  plugins: [],
}
