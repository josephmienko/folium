import React, { useState, useRef } from 'react';
import { Box, List, ListItem, Typography, Drawer, ListItemButton, ClickAwayListener, Fade } from '@mui/material';

const menuItems = [
  { label: 'Search', icon: 'search', link: '/search.html' },
  { label: 'Home', icon: 'home', link: '/' },
  { label: 'Get started', icon: 'apps', link: '/get-started' },
  { 
    label: 'Develop', icon: 'code', link: '/develop',
    subItems: [
      { label: 'Android', link: '/develop/android' },
      { label: 'Web', link: '/develop/web' },
      { label: 'iOS', link: '/develop/ios' },
    ],
  },
  { 
    label: 'Styles', icon: 'palette', link: '/styles',
    subItems: [
      { label: 'CSS', link: '/develop/css' },
      { label: 'SCSS', link: '/develop/scss' },
    ],
  },
  { label: 'Blog', icon: 'pages', link: '/blog' },
];

export default function SidebarMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [fadeKey, setFadeKey] = useState(0); // Key to force re-render of fade effect
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (item: string | null) => {
    const hasSubItems = menuItems.find(menu => menu.label === item)?.subItems;

    if (hasSubItems) {
      if (activeItem !== item) {
        setFadeKey((prev) => prev + 1); // Force fade animation when switching menus
      }
      setActiveItem(item);
      setIsDrawerOpen(true);
    }
  };

  const handleClickAway = (event: MouseEvent | TouchEvent) => {
    if (
      sidebarRef.current?.contains(event.target as Node) ||
      drawerRef.current?.contains(event.target as Node)
    ) {
      return;
    }
    setIsDrawerOpen(false);
    setActiveItem(null);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ display: 'flex', height: '100vh', position: 'relative' }}>
        {/* Fixed Sidebar (Anchor) */}
        <Box
          ref={sidebarRef}
          sx={{
            width: 80,
            backgroundColor: '#f5f5f5',
            paddingTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1201,
          }}
        >
          <List sx={{ width: '100%' }}>
            {menuItems.map(({ label, icon, link, subItems }) => (
              <ListItem
                key={label}
                disablePadding
                sx={{
                  textAlign: 'center',
                  padding: '12px 0',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={() => handleMouseEnter(label)}
              >
                <a
                  href={link}
                  aria-label={label}
                  role="link"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'inherit',
                    width: '100%',
                    padding: '12px 0',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                    {icon}
                  </span>
                  <Typography sx={{ fontSize: '10px', marginTop: '4px' }}>{label}</Typography>
                </a>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Right-Side Expanding Drawer */}
        <Drawer
          ref={drawerRef}
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          variant="persistent"
          SlideProps={{ timeout: { enter: 225, exit: 195 } }}
          sx={{
            '& .MuiDrawer-paper': { 
              width: 250, 
              padding: 2,
              marginLeft: "80px",
            },
          }}
        >
          {/* Fade transition for content switching */}
          <Fade in={!!activeItem} timeout={300} key={fadeKey}>
            <Box>
              {activeItem && (
                <>
                  <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 600, marginBottom: 1 }}>
                    {activeItem} Overview
                  </Typography>
                  <List>
                    {menuItems.find(item => item.label === activeItem)?.subItems?.map(sub => (
                      <ListItem key={sub.label} disablePadding>
                        <ListItemButton component="a" href={sub.link}>
                          {sub.label}
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Box>
          </Fade>
        </Drawer>
      </Box>
    </ClickAwayListener>
  );
}
