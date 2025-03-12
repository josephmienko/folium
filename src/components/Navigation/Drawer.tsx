import React, { useState, useRef, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, List, ListItem, IconButton, Link, ListItemIcon, Typography, Drawer, ListItemButton, ClickAwayListener, Fade, ListItemText } from '@mui/material';
import { ColorModeContext } from "../Brand/ThemeProvider";
import { MenuItem } from '../../types/Menu';
import { Collapse } from '@mui/material';



const menuItems: MenuItem[] = [
  { label: 'Search', icon: 'search', link: '/search.html' },
  { label: 'Home', icon: 'home', link: '/' },
  { label: 'Get started', icon: 'apps', link: '/get-started' },
  { 
    label: 'Develop', 
    icon: 'code', 
    link: '/develop',
    subItems: [
      { 
        label: 'Android', 
        link: '/develop/android',
        subItems: [
          { label: 'Google', link: '/develop/android/google' },
          { label: 'Samsung', link: '/develop/android/samsung' }
        ]
      },
      { 
        label: 'Web', 
        link: '/develop/web',
        subItems: [
          { label: 'Django', link: '/develop/web/django' },
          { label: 'React', link: '/develop/web/react' }
        ]
      },
      { label: 'iOS', link: '/develop/ios' }
    ]
  },
  { 
    label: 'Styles', 
    icon: 'palette', 
    link: '/styles',
    subItems: [
      { label: 'CSS', link: '/develop/css' },
      { label: 'SCSS', link: '/develop/scss' }
    ]
  },
  { label: 'Blog', icon: 'pages', link: '/blog' }
];


  export default function SidebarMenu() {
    const [expandedSubMenus, setExpandedSubMenus] = useState<Record<string, boolean>>({});
    const handleSubMenuToggle = (label: string) => {
        setExpandedSubMenus(prev => ({...prev, [label]: !prev[label]}));
    };
    const location = useLocation();
    const colorMode = useContext(ColorModeContext);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [fadeKey, setFadeKey] = useState(0); // Key to force re-render of fade effect
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const drawerRef = useRef<HTMLDivElement | null>(null);
    const [subMenuOpen, setSubMenuOpen] = useState<{[key: string]: boolean}>({});

    // Set initial state based on current URL
    useEffect(() => {
      const currentMenuItem = menuItems.find(item => 
        location.pathname === item.link || 
        item.subItems?.some(sub => location.pathname === sub.link)
      );
      if (currentMenuItem) {
        setActiveItem(currentMenuItem.label);
        setIsDrawerOpen(true);
      }
    }, [location.pathname]);

    const handleMouseEnter = (item: string | null) => {
    const hasSubItems = menuItems.find(menu => menu.label === item)?.subItems;

    if (hasSubItems) {
      if (activeItem !== item) {
        setFadeKey((prev) => prev + 1);
      }
      setActiveItem(item);
      setIsDrawerOpen(true);
    }
  };

  // Enhanced click handlers for both sidebar and drawer
  const handleItemClick = (label: string) => {
    setActiveItem(label);
    setIsDrawerOpen(true);
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
            width: 88,
            backgroundColor: 'background.paper',            
            paddingTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1201,
            borderRight: 1,
            borderColor: 'divider',
            color: 'text.primary' // Add this to ensure text visibility
          }}
        >
          <List sx={{ width: '100%' }}>
            {menuItems.map(({ label, icon, link }) => (
              <ListItem 
                key={label} 
                disablePadding
              >
                <ListItemButton
                  component="a"
                  href={link}
                  selected={activeItem === label}
                  onMouseEnter={() => handleMouseEnter(label)}
                >
                  <ListItemText 
                    primary={
                      <span className="material-symbols-outlined">
                        {icon}
                      </span>
                    }
                    secondary={label}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{
            marginTop: 'auto',  // This pushes the box to the bottom
            display: 'flex',
            justifyContent: 'center',
            width: '100%', 
            marginBottom: '16px',
          }}>
            <Typography variant="sideBarIconLabel">
              <IconButton 
                onClick={colorMode.toggleColorMode}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  '& .material-symbols-outlined': {
                    fontSize: '32px',
                    fontVariationSettings: "'FILL' 0",
                    transition: 'all 0.3s ease'
                  },
                  '&:hover': {
                    color: 'primary.main',
                    '& .material-symbols-outlined': {
                      fontVariationSettings: "'FILL' 1"
                    }
                  }
                }}
              >
                <span className="material-symbols-outlined">
                  {colorMode.mode === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </IconButton>
            </Typography>
          </Box>
        </Box>

        {/* Right-Side Expanding Drawer */}
        <Drawer
          ref={drawerRef}
          anchor="left"
          open={isDrawerOpen && Boolean(menuItems.find(item => item.label === activeItem)?.subItems)}
          onClose={() => setIsDrawerOpen(false)}
          variant="persistent"
          SlideProps={{ timeout: { enter: 225, exit: 195 } }}
          sx={{
            '& .MuiDrawer-paper': { 
              width: 250, 
              padding: 2,
              marginLeft: "80px",
              backgroundColor: 'background.default',
              color: 'text.primary',
              borderRight: 1,
              borderColor: 'divider'
            },
          }}
        >
          {/* Fade transition for content switching */}
          <Fade in={!!activeItem} timeout={300} key={fadeKey}>
            <Box>
              {activeItem && menuItems.find(item => item.label === activeItem)?.subItems && (
                <>
                  <ListItem disablePadding>
                    <ListItemButton 
                      selected={location.pathname === menuItems.find(item => item.label === activeItem)?.link}
                      component="a" 
                      href={menuItems.find(item => item.label === activeItem)?.link}
                      sx={{
                        borderRadius: '24px',
                        height: '2em',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          '& .MuiListItemText-secondary': {
                            color: 'primary.contrastText',
                          }
                        }
                      }}
                    >
                      <ListItemText primary={`${activeItem} Overview`} />
                    </ListItemButton>
                  </ListItem>
                  <List>
                    {menuItems.find(item => item.label === activeItem)?.subItems?.map(sub => (
                      <React.Fragment key={sub.label}>
                        <ListItem disablePadding>
                          <ListItemButton 
                            component="a" 
                            href={sub.link}
                            onClick={() => sub.subItems && handleSubMenuToggle(sub.label)}
                          >
                            <ListItemText primary={sub.label} />
                            {sub.subItems && (
                              <span className="material-symbols-outlined">
                                {expandedSubMenus[sub.label] ? 'expand_less' : 'expand_more'}
                              </span>
                            )}
                          </ListItemButton>
                        </ListItem>
                        {sub.subItems && (
                          <Collapse in={expandedSubMenus[sub.label]} timeout="auto">
                            <List>
                              {sub.subItems.map(subSub => (
                                <ListItem key={subSub.label} disablePadding>
                                  <ListItemButton 
                                    component="a" 
                                    href={subSub.link}
                                    sx={{ pl: 4 }}
                                  >
                                    <ListItemText primary={subSub.label} />
                                  </ListItemButton>
                                </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </>
              )}
            </Box>
          </Fade>
        </Drawer>
      </Box>
    </ClickAwayListener>
  );}



