/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        base: '95rem',
        nav: '110rem',
      },
      screens: {
        xs: '25rem',
        '2xl': '90rem',
        '3xl': '100rem',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serf'],
      },
      fontSize: {
        9: '0.5625rem',
        10: '0.625rem',
        40: '2.5rem',
      },
      colors: {
        brand: {
          sky: '#2AD9FF',
          blue: '#4874FF',
          'dark-blue': '#25376E',
          gray: {
            DEFAULT: '#6C7081',
            light: '#E2EAEF',
          },
          block: {
            1: '#F0FCFF',
            2: '#F0FAFF',
            3: '#F0F4FF',
            4: '#F7F0FF',
            5: '#F2F0FF',
            6: '#FFF0FE',
          },
          title: {
            1: '#34485B',
            2: '#2B5379',
            3: '#293A6A',
            4: '#452A63',
            5: '#31276E',
            6: '#6A4367',
          },
        },
      },
      spacing: {
        30: '1.875rem',
        50: '3.125rem',
        60: '3.75rem',
        70: '4.375rem',
        // 155: '9.6875rem',
      },
      borderRadius: {
        26: '1.625rem',
        30: '1.875rem',
        40: '2.5rem',
        50: '3.125rem',
      },
      boxShadow: {
        bar: '0px 0px 20px 0px #6C708133',
        'btn-primary':
          '-2px -2px 20px 4px rgba(42, 217, 255, 0.6), 2px 2px 20px 4px rgba(72, 116, 255, 0.6)',
        btn: '2px 2px 20px 4px #FFFFFF60',
        'btn-sm': '1px 1px 20px 2px #FFFFFF60',
        'btn-hover': '2px 2px 40px 4px #FFFFFF',
        'btn-sm-hover': '1px 1px 20px 2px #FFFFFF',
        tariff: '0px 2.5px 12.5px 0px #05214C0D',
      },
    },
  },
  plugins: [],
};
