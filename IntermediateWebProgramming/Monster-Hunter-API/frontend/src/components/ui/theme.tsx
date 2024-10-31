import {createTheme, ThemeOptions} from '@mui/material/styles'

const themeOptions: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#43362e',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#fcf5de',
        },
        background: {
            default: '#422915',
            paper: '#715937',
        },
        text: {
            primary: '#f7f2f2',
            secondary: 'rgba(255,255,255,0.7)',
            disabled: 'rgba(189,18,18,0.65)',
            hint: 'rgba(76,76,96,0.38)',
        },
        error: {
            main: '#9f6d27',
        },
    },
};

const theme = createTheme(themeOptions)
export default theme