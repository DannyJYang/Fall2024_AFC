import { createTheme } from '@mui/material/styles'

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#941515',
    },
    secondary: {
      main: '#d0c600',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#d4d4d4',
      secondary: 'rgba(208,208,208,0.54)',
      disabled: 'rgba(243,33,33,0.38)',
      hint: 'rgba(98,97,152,0.38)',
    },
    error: {
      main: '#0000a4',
    },
  },
};

const theme = createTheme(themeOptions)

export default theme;