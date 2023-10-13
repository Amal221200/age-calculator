/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'off-white': 'hsl(0, 0%, 94%)',
        'light-grey': 'hsl(0, 0%, 86%)',
        'smoke-grey': 'hsl(0, 1%, 44%)',
        'off-black': 'hsl(0, 0%, 8%)',
        'primary': 'hsl(259, 100%, 65%)',
        'light-red': 'hsl(0, 100%, 67%)',
      },
      backgroundColor: {
        'white': 'hsl(0, 0%, 100%)',
        'off-white': 'hsl(0, 0%, 94%)',
        'light-grey': 'hsl(0, 0%, 86%)',
        'smoke-grey': 'hsl(0, 1%, 44%)',
        'off-black': 'hsl(0, 0%, 8%)',
      },
      fontSize: {
        'input': '32px',
      },

    },
    screens: {
      'desktop': '1440px',
      'mobile': '375px'
    }
  },
  plugins: [],
}