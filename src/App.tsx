import Drawer from './components/Navigation/Drawer'
import React, { useContext } from "react";
import { Button, Box, Typography } from "@mui/material";
import { ColorModeContext } from "./components/Brand/ThemeProvider";

function App() {
  // ✅ Use the ColorModeContext correctly
  const colorMode = useContext(ColorModeContext);

  return (
    <>

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="h1">Vite + React</Typography>
      <Button 
          onClick={colorMode.toggleColorMode}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Toggle Theme
        </Button>
    </Box>
        <Drawer/>
        </>
  );
}

export default App;
