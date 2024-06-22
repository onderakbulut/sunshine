/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'primary': '#111111',
        'secondary': '#B7B7B7',
        'secondary-50': '#222222',
        'green': '#0ECE91',
        'red': '#b91b1b',
        'red-50': '#F5423D',
        'gray': '#707070',
        'gray-50': '#F3F3F3',
        'blue': '#41599B',
        'blue-50': '#64ACF1',
        
      },
      boxShadow: {
        '3xl': '0 9px 50px rgba(0, 0, 0, 0.1)',
        '2xl': '0 9px 62px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 30px rgba(17, 17, 17, 0.05)',
      },
      backgroundImage: {
        'hero': "url('/img/page-banner.jpg')",
        'contact': "url('/img/about/about-contact.jpg')",
      }
    },
    fontFamily: {
      'sans': ['Raleway', 'sans-serif', 'system-ui'],
      'aldrich': ['Aldrich', 'sans-serif'],
    }
  },
  plugins: [],
}
