/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}", // Automatically scans files in your src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // 👈 Injects daisyUI components
  ],
  // Optional daisyUI configuration
  daisyui: {
    themes: ["light", "dark", "cupcake"], // False to disable, True to include all themes, or an array like this
    darkTheme: "dark", // Name of one of the included themes for dark mode
    base: true, // Includes daisyUI base styles for common elements
    styled: true, // Includes daisyUI colors and design decisions for all components
    utils: true, // Adds responsive and modifier utility classes
    prefix: "", // Prefix for daisyUI classnames (e.g. cup-btn instead of btn)
    logs: true, // Shows daisyUI version and configuration logs in the terminal
    themeRoot: ":root", // The element that receives theme variables
  },
}
