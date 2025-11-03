module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b72ff',
          600: '#0a66e6',
          700: '#094fcc'
        },
        accent: {
          DEFAULT: '#2dd4bf'
        },
        med: {
          soft: '#f7f9fb',
          dark: '#0f1724'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        card: '0 6px 18px rgba(7, 28, 54, 0.08)'
      }
    },
  },
  plugins: [],
};
