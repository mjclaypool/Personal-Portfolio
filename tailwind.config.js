/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway": ["Raleway", "sans-serif"],
      },
      colors: {
        "p-ice-blue": "#51baee",
        "p-glacier-blue": "#187fb3",
        "n-light-grey": "#d9e2f1",
        "n-dark-grey": "#36444b",
        "n-very-dark-blue": "#010d13",
      },
      boxShadow: {
        "card": "0px 0px 65px 20px rgba(24,127,179,0.5), 0px 20px 22px 0px rgba(24,127,179,0.16)",
      },
      keyframes: {
        slideUpFadeIn: {
          "from": { opacity: '0', transform: 'translateY(50px)' },
          "to": { opacity: '1', transform: 'translateY(0)' },
        },
        expansion: {
          "0%": { bg: 'radial-gradient(rgba(24,127,179,0.9) 0%, rgba(24,127,179,0) 60%)' },
          "20%": { bg: 'radial-gradient(rgba(24,127,179,1) 0%, rgba(24,127,179,1) 20%, rgba(24,127,179,0) 60%)' },
          "40%": { bg: 'radial-gradient(rgba(24,127,179,1) 0%, rgba(24,127,179,1) 40%, rgba(24,127,179,0) 60%)' },
          "60%": { bg: 'radial-gradient(rgba(24,127,179,1) 0%, rgba(24,127,179,1) 60%, rgba(24,127,179,0) 80%)' },
          "80%": { bg: 'radial-gradient(rgba(24,127,179,1) 0%, rgba(24,127,179,1) 80%, rgba(24,127,179,0) 100%)' },
          "100%": { bg: 'radial-gradient(rgba(24,127,179,1) 0%, rgba(24,127,179,1) 100%)' },
        },
        slideInFromRight: {
          "from": { transform: 'translateX(100%)' },
          "to": { transform: 'translateX(0%)' },
        },
        fadeIn: {
          "from": { opacity: '0' },
          "to": { opacity: '1' },
        },
        slideInFromTop: {
          "from": { transform: 'translateY(-100%)' },
          "to": { transform: 'translateY(0%)' },
        },
        slideInFromLeft: {
          "from": { transform: 'translateX(-100%)' },
          "to": { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'drawer-open': 'slideInFromRight .2s ease-out forwards',
        'select-about-topic': 'expansion 0.1s linear forwards',
        'load-images': 'slideUpFadeIn 0.3s ease-out forwards',
        'hero-load': 'fadeIn 0.5s ease-out forwards',
        'view-details': 'slideInFromTop .2s ease-out forwards',
        'view-details-lg': 'slideInFromLeft .2s ease-out forwards',
      },
    },
  },
  plugins: [],
}

