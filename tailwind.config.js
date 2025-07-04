// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    // This disables the use of oklch() for colors
    experimental: {
      optimizeUniversalDefaults: true,
    },
    // Optionally, you can also force colors to use hex/rgb by customizing your palette
  };