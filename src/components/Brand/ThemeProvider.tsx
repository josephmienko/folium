import React, { createContext, useMemo, useState, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { createCustomTheme } from './theme';
import { PaletteMode } from "@mui/material";


interface ColorModeContextType {
    mode: PaletteMode;
    toggleColorMode: () => void;
  }

export const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  
  const theme = useMemo(() => createCustomTheme(mode), [mode]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default ThemeProvider;
