import { createTheme, PaletteMode } from '@mui/material';
import themeTokens from './m3ThemeAndTypography.json';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: themeTokens.schemes[mode].primary,
      contrastText: themeTokens.schemes[mode].onPrimary,
    },
    secondary: {
      main: themeTokens.schemes[mode].secondary,
      contrastText: themeTokens.schemes[mode].onSecondary,
    },
    tertiary: {
      main: themeTokens.schemes[mode].tertiary,
      contrastText: themeTokens.schemes[mode].onTertiary,
    },
    background: {
      default: themeTokens.schemes[mode].surface,
      paper: themeTokens.schemes[mode].surfaceContainer,
    },
    text: {
      primary: themeTokens.schemes[mode].onSurface,
      secondary: themeTokens.schemes[mode].onSurfaceVariant,
    },
    divider: themeTokens.schemes[mode].outline,
    action: {
      hover: themeTokens.schemes[mode].primaryContainer,
      selected: themeTokens.schemes[mode].primary,
    },
  },
  typography: themeTokens.typography
});

export const createCustomTheme = (mode: PaletteMode) => 
  createTheme(getDesignTokens(mode));

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sideBarIcon: true;
    sideBarIconLabel: true;
    sideBarDrawerLabel: true;
    // Add other custom variants here
  }
}