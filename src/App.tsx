import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ColorModeContext } from "./components/Brand/ThemeProvider";
import Navigation from './components/Navigation/Navigation';

function App() {
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ display: 'flex', height: '100vh', position: 'relative' }}>
      <Navigation />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "background.default",
          color: "text.primary",
          flexGrow: 1,
          marginLeft: { xs: 0, sm: '100px' } // Adjust this based on the width of the NavigationRail
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
    </Box>
  );
}

export default App;
