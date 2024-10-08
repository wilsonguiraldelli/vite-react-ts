import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import theme from './theme';
import router from './routes';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </StyledThemeProvider>
  </MuiThemeProvider>
);

export default App;
