import { common } from '@mui/material/colors';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    yellow: string;
  }

  interface Palette {
    support: {
      main: string;
      light: string;
      dark: string;
      darker: string;
    };
  }
}

const palette = {
  primary: {
    main: '#3f51b5', // add change
    light: '#6573c3', // add change
    dark: '#2c387e', // add change
    contrastText: common.white,
  },
  support: {
    main: '#eee',
    light: '#c8cdcd',
    dark: '#999',
    darker: '#555e61',
  },
  common: {
    ...common,
    yellow: '#ffcd00',
  },
  secondary: {
    main: '#651fff', // add change
    light: '#834bff', // add change
    dark: '#4615b2', // add change
    contrastText: common.white,
  },
  background: {
    default: '#eee',
    paper: common.white,
  },
  text: {
    primary: '#00141e',
    secondary: '#555e61',
    disabled: '#c8cdcd',
  },
};

export default palette;
