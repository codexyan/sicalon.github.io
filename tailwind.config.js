/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    screens: {
      mn: '100px',
      mb: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',

    },
    fontFamily: {
      poppins: ['poppins', 'sans-serif'],
      sansita: ['sansita swashed', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extends: {}
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

