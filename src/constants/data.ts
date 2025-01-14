import { NavItem } from 'types';

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Search Transactions',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Search Addresses',
    url: '/dashboard/overview',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },

  {
    title: 'Top Holders',
    url: '/dashboard/overview',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Sample Dropdown',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Profile',
        url: '/dashboard/overview',
        icon: 'userPen',
        shortcut: ['m', 'm']
      }
    ]
  }
];

export const navItems2: NavItem[] = [
  {
    title: 'All Tokens',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Side By Side',
    url: '/dashboard/overview',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },

  {
    title: 'Mint Heatmap',
    url: '/dashboard/overview',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'MarketCap Calc',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'billing',
    isActive: true,

    items: []
  }
];

export const navItems3: NavItem[] = [
  {
    title: 'Trade on KSPR',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Mint & Deploy',
    url: '/dashboard/overview',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Sample Kanban',
    url: '/dashboard/kanban',
    icon: 'kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  }
];
