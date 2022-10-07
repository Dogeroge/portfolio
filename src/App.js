import PlusJakartaSansLight from './fonts/PlusJakartaSans-Light.woff2'
import PlusJakartaSansRegular from './fonts/PlusJakartaSans-Regular.woff2'
import PlusJakartaSansSemiBold from './fonts/PlusJakartaSans-SemiBold.woff2'
import PlusJakartaSansExtraBold from './fonts/PlusJakartaSans-ExtraBold.woff2'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, Container, CssBaseline, Grid, Typography } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Plus Jakarta Sans, Arial',
    fontSize: 24,
    light: {
      fontWeight: 200
    },
    regular: {
      fontWeight: 400
    },
    semibold: {
      fontWeight: 500
    },
    extrabold: {
      fontWeight: 800
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Plus Jakarta Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 200;
          src: local('Plus Jakarta Sans'), local('PlusJakartaSans-Light'), url(${PlusJakartaSansLight}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Plus Jakarta Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Plus Jakarta Sans'), local('PlusJakartaSans-Regular'), url(${PlusJakartaSansRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Plus Jakarta Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Plus Jakarta Sans'), local('PlusJakartaSans-SemiBold'), url(${PlusJakartaSansSemiBold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Plus Jakarta Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 800;
          src: local('Plus Jakarta Sans'), local('PlusJakartaSans-ExtraBold'), url(${PlusJakartaSansExtraBold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function App() {
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Box
      sx={{
        backgroundColor:'#2C3E50',
        height: '100vh'
      }}
    >
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs="6">
          <Typography color="white" variant="light">Texto en h4</Typography>
          <Typography variant="regular">Texto en h4</Typography>
          <Typography variant="semibold">Texto en h4</Typography>
          <Typography variant="extrabold">Texto en h4</Typography>
          <Button color="primary" variant="contained" size="small">Botoncito de prueba</Button>
        </Grid>
      </Grid>
    </Box>
  </ThemeProvider>
}

export default App;
