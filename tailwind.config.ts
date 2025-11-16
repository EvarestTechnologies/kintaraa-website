import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        primary: '#6A2CB0',
        'primary-pink': '#E24B95',
        'primary-dark': '#341A52',
        secondary: '#F3B52F',
        'secondary-teal': '#26A69A',

        // Neutral colors
        'neutral-light': '#F5F0FF',
        'neutral-mid': '#D8CEE8',
        'neutral-dark': '#49455A',
        'neutral-black': '#1A1625',

        // Alert colors
        success: '#43A047',
        warning: '#FFB300',
        error: '#E53935',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #6A2CB0, #E24B95)',
        'gradient-purple': 'linear-gradient(90deg, #6A2CB0, #E24B95)',
        'gradient-gold': 'linear-gradient(90deg, #F3B52F, #6A2CB0)',
        'gradient-teal': 'linear-gradient(90deg, #26A69A, #6A2CB0)',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
