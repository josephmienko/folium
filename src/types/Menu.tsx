export interface SubMenuItem {
    label: string;
    link: string;
    subItems?: SubMenuItem[];
  }
  
export interface MenuItem {
    label: string;
    icon: string;
    link: string;
    subItems?: SubMenuItem[];
  }
  