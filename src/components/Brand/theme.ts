import { createTheme, PaletteMode } from '@mui/material';
import material3Theme from './material3Theme.json';
import { typographyCustomizations, getDesignTokens } from './typographyConfiguration';

export const createCustomTheme = (mode: PaletteMode) =>
  createTheme({
    ...getDesignTokens(mode), // ✅ Merging Material 3 color tokens
    typography: {
      ...getDesignTokens(mode).typography, // ✅ Ensure Typography is included
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            maxWidth: "65ch",
          },
        },
        ...typographyCustomizations, // ✅ Apply custom typography mappings
      },
    },
  });

export const lightTheme = createCustomTheme("light");
export const darkTheme = createCustomTheme("dark");
