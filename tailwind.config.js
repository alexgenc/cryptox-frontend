module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight : {
        'extra-loose': '5'
      },
      spacing : {
        'x-lg' : '100px',
        '2x-lg' : '150px'
      },
      fill: (theme) => ({
        red: theme('colors.red.primary')
      }),
      colors: {
        white: '#ffffff',
        blue: {
          medium: '#005c98'
        },
        black: {
          light: '#262626',
          faded: '#00000059'
        },
        gray: {
          base: '#616161',
          background: '#fafafa',
          primary: '#dbdbdb'
        },
        red: {
          primary: '#ed4956'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
