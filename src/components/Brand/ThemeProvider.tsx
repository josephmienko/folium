import React, { createContext, useMemo, useState, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { createCustomTheme } from './theme';

// Define a strong type for the context
interface ColorModeContextType {
  toggleColorMode: () => void;
}

// ✅ Provide a default value (ensures no undefined context errors)
export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Store mode in state
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // ✅ Ensure the theme updates dynamically when toggled
  const theme = useMemo(() => createCustomTheme(mode), [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
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
