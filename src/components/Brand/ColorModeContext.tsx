import { createContext, useState, useMemo } from "react";
import { PaletteMode } from "@mui/material";

export const ColorModeContext = createContext({
  mode: "light",
  toggleColorMode: () => {}, // ✅ Default placeholder
});

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem("themeMode") as PaletteMode) || "light"
  );

  const colorMode = useMemo(() => ({
    mode,
    toggleColorMode: () => {
      setMode((prevMode) => {
        const newMode = prevMode === "light" ? "dark" : "light";
        localStorage.setItem("themeMode", newMode);
        console.log("Theme switched to:", newMode); // ✅ Debugging Log
        return newMode;
      });
    },
  }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      {children}
    </ColorModeContext.Provider>
  );
}
