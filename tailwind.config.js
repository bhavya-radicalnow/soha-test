/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Override the default sans to use Onest
        sans: ['var(--font-onest)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
