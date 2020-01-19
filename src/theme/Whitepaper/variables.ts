import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Shadow from './shadows';

const shadow:any = Shadow

const primaryColor = {
  50: '#e6eefa',
  100: '#c1d4f3',
  200: '#98b8ec',
  300: '#6e9ce4',
  400: '#4f86de',
  500: '#3071d8',
  600: '#2b69d4',
  700: '#245ece',
  800: '#1e54c8',
  900: '#1342bf',
  A100: '#eff3ff',
  A200: '#bcccff',
  A400: '#89a5ff',
  A700: '#6f91ff',
};

const secondaryColor = {
  50: '#e4f6eb',
  100: '#bce9cc',
  200: '#90daaa',
  300: '#63cb88',
  400: '#41c06f',
  500: '#20b555',
  600: '#1cae4e',
  700: '#18a544',
  800: '#139d3b',
  900: '#0b8d2a',
  A100: '#bdffc9',
  A200: '#8affa0',
  A400: '#57ff77',
  A700: '#3dff63',
};

const themeObject = {
  palette: {
    primary: primaryColor,
    secondary: {
      ...secondaryColor,
      ...{
        light: secondaryColor[300],
        main: secondaryColor[500],
        dark: secondaryColor[700]
      },
      contrastText: '#ffffff'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f6f9',
    },
    action: {
      selected: '#f5f6f9',
      active: '#8091a5',
      hover: '#f9f9fb'
    },
    divider: '#dfe3e8'
  },
  props: {
    MuiButtonBase: {
      disableRipple: false,
    },
    MuiInput: {
      disableUnderline: true
    },
    MuiInputLabel: {
      shrink: true
    }
  },
  shadows: shadow
}

const theme = createMuiTheme(themeObject);

const white = {
  text: '#ffffff',
  primary: 'rgba(255, 255, 255, 0.7)',
  secondary: 'rgba(255, 255, 255, 0.54)',
  disabled: 'rgba(255, 255, 255, 0.38)',
  hint: 'rgba(255, 255, 255, 0.24)',
};

export default {
  theme,
  white
};