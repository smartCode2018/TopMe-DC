import { Home, Circle, User, Users, FileText, Settings, Smile, Box } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    action:'read',
    resource:'Admin',
    // badge: 'light-warning',
    navLink: '/admin/dashboard'
    // badgeText: '2'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20}/>,
    action:'read',
    resource:'User',
    // badge: 'light-warning',
    navLink: '/dashboard'
    // badgeText: '2'
  },
  {
    id: 'impact',
    title: 'Create Impact',
    icon: <Smile size={20} />,
    action:'read',
    resource:'Auth',
    // badge: 'light-warning',
    navLink: '/pages/user-profile/create-an-impact'
    // badgeText: '2'
  },

  {
    id: 'projects',
    title: 'Projects',
    icon: <Box size={20} />,
    action:'read',
    resource:'Admin',
    // badge: 'light-warning',
    navLink: '/dashboard/admin/projects/list'
    // badgeText: '2'
  },
  
  {
    id: 'users',
    title: 'Users',
    icon: <Users size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        action:'read',
        resource:'Admin',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      },
      {
        id: 'view',
        title: 'View',
        action:'read',
        resource:'Admin',
        icon: <Circle size={12} />,
        navLink: '/apps/user/view'
      },
      {
        id: 'edit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/user/edit'
      }
    ]
  },
  {
    id: 'invoiceApp',
    title: 'Invoice',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'invoiceList',
        title: 'List',
        icon: <Circle size={12} />,
        action:'read',
        resource:'Admin',
        navLink: '/apps/invoice/list'
      },
      {
        id: 'invoicePreview',
        title: 'Preview',
        icon: <Circle size={12} />,
        action:'read',
        resource:'Admin',
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'invoiceEdit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/edit'
      },
      {
        id: 'invoiceAdd',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/add'
      }
    ]
  },
  {
    id: 'profile',
    title: 'Account Settings',
    icon: <Settings size={20} />,
    action:'read',
    resource:'Auth',
    // badge: 'light-warning',
    navLink: '/pages/user-profile/account-settings'
    // badgeText: '2'
  }
]
