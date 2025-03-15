import React, { useState } from 'react';
import { ClickAwayListener, Box, useMediaQuery, Drawer, CssBaseline, List, ListItem, ListItemButton, ListItemText, Typography, Divider, IconButton } from '@mui/material';
import NavigationRail from './NavigationRail';
import NavigationDrawer from './NavigationDrawer';
import NavigationAppBar from './NavigationAppBar';
import { menuItems, screenWidthTransition } from './NavigationConfiguration';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const [expandedSubMenus, setExpandedSubMenus] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const [secondaryDrawerOpen, setSecondaryDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width:${screenWidthTransition}px)`);
  const navigate = useNavigate();

  const handleMouseEnter = (item: string) => {
    const hasSubItems = menuItems.find(menu => menu.label === item)?.subItems;

    if (hasSubItems) {
      if (activeItem !== item) {
        setFadeKey((prev) => prev + 1);
      }
      setActiveItem(item);
      setIsDrawerOpen(true);
    }
  };

  const handleSubMenuToggle = (label: string) => {
    setExpandedSubMenus(prev => ({...prev, [label]: !prev[label]}));
  };

  const handleClickAway = (event: MouseEvent | TouchEvent) => {
    setIsDrawerOpen(false);
    setActiveItem(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSecondaryDrawerToggle = (item: string) => {
    setActiveItem(item);
    setSecondaryDrawerOpen(true);
  };

  const primaryDrawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => item.subItems ? handleSecondaryDrawerToggle(item.label) : navigate(item.link)}>
              <ListItemText primary={item.label} />
              {item.subItems && <ArrowForwardIosIcon />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ display: 'flex', height: '100vh', position: 'relative' }}>
        <CssBaseline />
        {isMobile ? (
          <>
            <NavigationAppBar handleDrawerToggle={handleDrawerToggle} />
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
              }}
            >
              {primaryDrawer}
            </Drawer>
            <Drawer
              variant="temporary"
              open={secondaryDrawerOpen}
              onClose={() => setSecondaryDrawerOpen(false)}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
              }}
            >
              <Box>
                <IconButton onClick={() => setSecondaryDrawerOpen(false)}>
                  <ArrowBackIosIcon />
                </IconButton>
                <NavigationDrawer 
                  menuItems={menuItems}
                  activeItem={activeItem}
                  isDrawerOpen={isDrawerOpen}
                  setIsDrawerOpen={setIsDrawerOpen}
                  expandedSubMenus={expandedSubMenus}
                  handleSubMenuToggle={handleSubMenuToggle}
                  fadeKey={fadeKey}
                />
              </Box>
            </Drawer>
          </>
        ) : (
          <NavigationRail 
            menuItems={menuItems}
            activeItem={activeItem}
            handleMouseEnter={handleMouseEnter}
          />
        )}
        {!isMobile && (
          <NavigationDrawer 
            menuItems={menuItems}
            activeItem={activeItem}
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
            expandedSubMenus={expandedSubMenus}
            handleSubMenuToggle={handleSubMenuToggle}
            fadeKey={fadeKey}
          />
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default Navigation;
