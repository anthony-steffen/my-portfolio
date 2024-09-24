import {createTheme, responsiveFontSizes} from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#4f8e3e',
    },
  
  },
  typography: {
    fontFamily: [
        "Helvetica Neue",
        // '-apple-system',
        // 'BlinkMacSystemFont',
        // '"Segoe UI"',
        // 'Roboto',
        // 'Arial',
        // 'sans-serif',
        // '"Apple Color Emoji"',
        // '"Segoe UI Emoji"',
        // '"Segoe UI Symbol"',
    ].join(','),
},

breakpoints: {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
},
});

theme = responsiveFontSizes(theme);

export default theme;
 
//  Now, you can use this theme in your app.
    