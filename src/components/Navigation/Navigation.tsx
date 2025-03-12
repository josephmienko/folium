import React, { useState } from 'react';
import { ClickAwayListener } from '@mui/material';
import NavigationRail from './NavigationRail';
import NavigationDrawer from './NavigationDrawer';
import { menuItems } from './NavigationConfiguration';

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const [expandedSubMenus, setExpandedSubMenus] = useState<Record<string, boolean>>({});

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

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <NavigationRail 
          menuItems={menuItems}
          activeItem={activeItem}
          handleMouseEnter={handleMouseEnter}
        />
        <NavigationDrawer 
          menuItems={menuItems}
          activeItem={activeItem}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          expandedSubMenus={expandedSubMenus}
          handleSubMenuToggle={handleSubMenuToggle}
          fadeKey={fadeKey}
        />
      </div>
    </ClickAwayListener>
  );
};

export default Navigation;
