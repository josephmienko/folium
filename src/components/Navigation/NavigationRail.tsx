import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { MenuItem } from './NavigationConfiguration';
import { useNavigate } from 'react-router-dom';

interface NavigationRailProps {
  menuItems: MenuItem[];
  activeItem: string | null;
  handleMouseEnter: (label: string) => void;
}

export const NavigationRail = ({ menuItems, activeItem, handleMouseEnter }: NavigationRailProps) => {
  const navigate = useNavigate();

  const handleItemClick = (label: string, link: string) => {
    navigate(link);
  };

  return (
    <Box
      sx={{
        width: 100,
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
        borderColor: 'divider'
      }}
    >
      <List sx={{ width: '100%' }}>
        {menuItems.map(({ label, icon, link }) => (
          <ListItem 
            key={label} 
            disablePadding
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 2
            }}
          >
            <ListItemButton
              component="div"
              selected={activeItem === label}
              onMouseEnter={() => handleMouseEnter(label)}
              onClick={() => handleItemClick(label, link)}
              sx={{
                backgroundColor: 'transparent',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100px',
                height: '64px',
                '&:hover': {
                  backgroundColor: 'transparent'
                }
              }}
            >
              <ListItemText 
                primary={
                  <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                    {icon}
                  </span>
                }
                secondary={label}
                sx={{ textAlign: 'center' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavigationRail;
