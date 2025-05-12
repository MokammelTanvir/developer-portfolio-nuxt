/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Vue.js and Nuxt inspired colors
        primary: '#00DC82',     // Nuxt green
        secondary: '#00443C',   // Darker green
        vue: {
          green: '#42b883',     // Vue.js green
          dark: '#34495e',      // Vue.js dark blue
          black: '#1a202c',     // Dark shade
        },
        background: '#F8F9FA',  // Light background
        text: '#2E2E2E',        // Dark text
        cta: '#00DC82',         // CTA color matching Nuxt green
        softBorder: '#D1D5DB',  // Soft gray
        // Dark mode variants
        darkBg: '#121212',
        darkText: '#F5F5F5',
        darkBorder: '#2A2A2A'
      }
    }
  },
  darkMode: 'class',
  plugins: []
} 