import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Shadow from './shadows';

const shadow:any = Shadow

const themeObject = {
  palette: {
    primary: {
      main: '#25304c',
    },
    secondary: {
      main: '#00B0FF',
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