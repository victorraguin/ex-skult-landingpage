/* eslint-disable unicorn/prefer-module */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@skultgg/**/*.js'],
    theme: {
      extend: {
        screens: {
          
          sm: '640px',
          // => @media (min-width: 640px) { ... }
          md: '768px',
          // => @media (min-width: 768px) { ... }
          lg: '1024px',
          // => @media (min-width: 1024px) { ... }
          xl: '1280px',
          // => @media (min-width: 1280px) { ... }
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
          '3xl': '1920px',
          // => @media (min-width: 1920px) { ... }
          '4xl': '2560px',
          // => @media (min-width: 2560px) { ... }
          '5xl': '3440px',
          // => @media (min-width: 3440px) { ... }
          '6xl': '3840px',
          // => @media (min-width: 3840px) { ... }
        },
        colors: {
          primary: {
            500: '#FFD000',
            DEFAULT: '#FFC000',
            700: '#FFB000',
          },
          secondary: {
            DEFAULT: '#242731',
          },
          disabled: '#E4E4E4',
          barShartStat: '#FF544D',
          'bg-1': '#1F2128',
          'grey-neutral': '#808191',
          'grey-50': '#E4E4E4',
        },
        backgroundImage: {
          'img-1': "url('/resources/images/full-bg.png')",
        },
        fontFamily: {
          sans: ['Inter'],
          poppins: ['Poppins', 'Inter', 'sans-serif'],
        },
        keyframes: {
          wiggle: {
            '0%, 100%': {
              transform: 'rotate(-3deg)',
            },
            '50%': {
              transform: 'rotate(3deg)',
            },
          },
        },
        animation: {
          wiggle: 'wiggle 200ms ease-in-out',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('tailwind-scrollbar')],
  };