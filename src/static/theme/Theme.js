import { createTheme } from '@material-ui/core';

const Theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          scrollbarColor: "#f5f7ff #c0d3fc",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: 'black',
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 1,
            backgroundColor: '#2A0944',
            minHeight: 10,
            border: '.5px solid black',
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#2A0944",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: '#2A0944',
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: '#2A0944',
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: '#2A0944',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#6fedf7',
      main: '#32C1CD',
      dark: '#18868f'
    },
    secondary: {
      light: '#c94040',
      main: '#BC8CF2',
      dark: '#380101'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#d500f9',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    background: {
      paper: '#544179',
      default: '#2A0944',
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      'Krona One',
      'Space Mono'
    ]
  }
});

export default Theme;