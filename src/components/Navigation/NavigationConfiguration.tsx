interface SubMenuItem {
  label: string;
  link: string;
  subItems?: SubMenuItem[];
}

interface MenuItem {
  label: string;
  icon: string;
  link: string;
  subItems?: SubMenuItem[];
}
 
export const menuItems: MenuItem[] = [
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
      { label: 'CSS', link: '/styles/css' },
      { label: 'SCSS', link: '/styles/scss' }
    ]
  },
  { label: 'Blog', icon: 'pages', link: '/blog' }
];

export const screenWidthTransition = 960;

export type { MenuItem, SubMenuItem };
