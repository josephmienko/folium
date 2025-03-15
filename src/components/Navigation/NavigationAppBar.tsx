import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavigationAppBarProps {
  handleDrawerToggle: () => void;
}

const NavigationAppBar = ({ handleDrawerToggle }: NavigationAppBarProps) => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          MUI
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationAppBar;