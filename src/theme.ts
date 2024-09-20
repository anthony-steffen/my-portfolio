import {createTheme, responsiveFontSizes} from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
      //main: '#232323',#556cd6
    },
    secondary: {
      main: '#4f8e3e',
      //main: '#4f8e3e',#19857b
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
}
});

theme = responsiveFontSizes(theme);

export default theme;
 
//  Now, you can use this theme in your app.
    