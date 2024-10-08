import { createTheme, lighten } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#E5E5E5',
      paper: '#F6F6F6',
    },
    primary: {
      main: '#0050DC',
      light: lighten('#0050DC', 0.7),
    },
    secondary: {
      main: '#643CB4',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#43B581',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F1C544',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF4D4D',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#707070',
      disabled: '#C6C6C6',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif;',
    subtitle1: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '*::-webkit-scrollbar': {
            width: 8,
            height: 8,
          },
          '*::-webkit-scrollbar-track': {
            background: '#f2f2f2',
          },
          '*::-webkit-scrollbar-thumb': {
            background: '#ccc',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            background: '#EEEEEE',
            cursor: 'not-allowed',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiMenu-paper': {
            maxHeight: 300,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
        },
        startIcon: {
          position: 'absolute',
          left: 16,
        },
        endIcon: {
          position: 'absolute',
          right: 16,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: '#F6F6F6',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
  },
});

export default theme;
