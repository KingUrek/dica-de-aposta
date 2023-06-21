/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: '428px',
      mobileg: '640px',
      tabletp: '768px',
      tablet: '990px',
      tabletx: '1024px',
      tabletg: '1280px',
      desktop: '1440px',
    },
    colors: {
      gray: {
        dark: '#6A6A6A',
        DEFAULT: '#BFBFBF',
        light: '#F1F1F1',
        search: '#E7E7E7',
        seachText: '#858585',
        tipbg: '#E4E4E4'
      },
      black: {
        darkest: '#000000',
        dark: '#101114',
        DEFAULT: '#1E1F24',
        light: '#2B2C33',
        lightest: '#454652',
      },
      primary: {
        DEFAULT: '#0084A1',
        invert: '#FF7B5E',
        satured: '#0091B5',
        desatured: '#107A91',
        gray: '#515151',
        light: '#00A5C9',
        dark: '#006A81',
      },
      airforce: '#5D8AA8',
      azure: '#F2F9FA',
      bluesteel: '#4682B4',
      cadetBlue: '#5F9EA0',
      darkCyan: '#008B8B',
      teal: '#008080',
      white: '#FFFFFF',
      borderGray: '#B9B9B9',
      grayshOrange: '#EDE3CF',
      deepblue: '#094452',
      transparent:'transparent'
    },
    borderRadius: {
      DEFAULT: '10px',
      sm: '5px',
    },

    fontSize: {
      10: ['10px', { lineHeight: '135%', letterSpacing: '0px' }],
      12: ['12px', { lineHeight: '135%', letterSpacing: '0px' }],
      14: ['14px', { lineHeight: '135%', letterSpacing: '0px' }],
      16: ['16px', { lineHeight: '135%', letterSpacing: '0px' }],
      18: ['18px', { lineHeight: '135%', letterSpacing: '0px' }],
      20: ['20px', { lineHeight: '135%', letterSpacing: '0px' }],
      28: ['28px', { lineHeight: '135%', letterSpacing: '0px' }],
      32: ['32px', { lineHeight: '135%', letterSpacing: '0px' }],
      36: ['36px', { lineHeight: '135%', letterSpacing: '0px' }],
      40: ['40px', { lineHeight: '135%', letterSpacing: '0px' }],
      48: ['48px', { lineHeight: '135%', letterSpacing: '0px' }],
      64: ['64px', { lineHeight: '135%', letterSpacing: '0px' }],
    },
    backgroundImage:{
      telegram:"url('/public/telegram-background.png)'"
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-avenirNext)'],
        tittilium: ['var(--font-tittilium)'],
      },

      spacing:{
        13:'3.25rem',
        15:'3.75rem',
        16:'4rem',
        18:'4.5rem',
        19:'4.75rem',
        22:'5.5rem',
        26:'6.5rem'
      },

    },
  },
  plugins: [],
};
