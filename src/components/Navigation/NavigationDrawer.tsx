import React, { useRef } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Drawer, Fade, Collapse, IconButton } from '@mui/material';
import { MenuItem, SubMenuItem } from './NavigationConfiguration';
import { useLocation, useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
  const navigate = useNavigate();
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (event: React.MouseEvent, item: SubMenuItem) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (item.subItems) {
      handleSubMenuToggle(item.label);
    } else {
      navigate(item.link);
      setIsDrawerOpen(false);
    }
  };

  const renderSubItems = (subItems: SubMenuItem[]) => (
    <List component="div" disablePadding>
      {subItems.map(sub => (
        <React.Fragment key={sub.label}>
          <ListItem disablePadding>
            <ListItemButton 
              component="div"
              onClick={(e) => handleItemClick(e, sub)}
              sx={{ 
                pl: 4 + (sub.subItems ? 0 : 2),
                '&:hover': {
                  backgroundColor: 'action.hover'
                }
              }}
              aria-expanded={expandedSubMenus[sub.label] ? 'true' : 'false'}
              role="treeitem"
            >
              <ListItemText primary={sub.label} />
              {sub.subItems && (
                <span className="material-symbols-outlined">
                  {expandedSubMenus[sub.label] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </span>
              )}
            </ListItemButton>
          </ListItem>
          
          {sub.subItems && (
            <Collapse in={expandedSubMenus[sub.label]} timeout="auto" unmountOnExit>
              {renderSubItems(sub.subItems)}
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );

  const activeMenuItem = menuItems.find(item => item.label === activeItem);

  return (
    <Drawer
      ref={drawerRef}
      anchor="left"
      open={isDrawerOpen || !!activeItem}
      onClose={() => setIsDrawerOpen(false)}
      variant="persistent"
      SlideProps={{ timeout: { enter: 225, exit: 195 } }}
      sx={{
        '& .MuiDrawer-paper': { 
          width: 240, 
          padding: 2,
          backgroundColor: 'background.default',
          color: 'text.primary',
          borderRight: 1,
          borderColor: 'divider'
        },
      }}
    >
      <Fade in={!!activeItem} timeout={300} key={fadeKey}>
        <Box>
          {activeItem && activeMenuItem?.subItems && (
            <>
              <ListItem disablePadding>
                <ListItemButton 
                  selected={location.pathname === activeMenuItem.link}
                  component="div"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate(activeMenuItem.link);
                    setIsDrawerOpen(false);
                  }}
                  aria-expanded={expandedSubMenus[activeMenuItem.label] ? 'true' : 'false'}
                  role="treeitem"
                >
                  <ListItemText primary={`${activeItem} Overview`} />
                  <IconButton
                    edge="end"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubMenuToggle(activeMenuItem.label);
                    }}
                  >
                    {expandedSubMenus[activeMenuItem.label] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </ListItemButton>
              </ListItem>
              {renderSubItems(activeMenuItem.subItems)}
            </>
          )}
        </Box>
      </Fade>
    </Drawer>
  );
};
export default NavigationDrawer;
