import React, { useRef } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Drawer, Fade, Collapse } from '@mui/material';
import { MenuItem } from './NavigationConfiguration';
import { useLocation } from 'react-router-dom';

interface NavigationDrawerProps {
  menuItems: MenuItem[];
  activeItem: string | null;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  expandedSubMenus: Record<string, boolean>;
  handleSubMenuToggle: (label: string) => void;
  fadeKey: number;
}

export const NavigationDrawer = ({
  menuItems,
  activeItem,
  isDrawerOpen,
  setIsDrawerOpen,
  expandedSubMenus,
  handleSubMenuToggle,
  fadeKey
}: NavigationDrawerProps) => {
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);

  return (
    <Drawer
      ref={drawerRef}
      anchor="left"
      open={isDrawerOpen && !!menuItems.find(item => item.label === activeItem)?.subItems}
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
      <Fade in={!!activeItem} timeout={300} key={fadeKey}>
        <Box>
          {activeItem && menuItems.find(item => item.label === activeItem)?.subItems && (
            <>
              <ListItem disablePadding>
                <ListItemButton 
                  selected={location.pathname === menuItems.find(item => item.label === activeItem)?.link}
                  component="a" 
                  href={menuItems.find(item => item.label === activeItem)?.link}
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
                        onClick={(event) => {
                          if (sub.subItems) {
                            event.preventDefault();
                            handleSubMenuToggle(sub.label);
                          }
                        }}
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
  );
};
export default NavigationDrawer;
