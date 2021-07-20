import { Home, Circle, User } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    action:'read',
    resource:'Auth',
    // badge: 'light-warning',
    navLink: '/'
    // badgeText: '2'
  },
  {
    id: 'impact',
    title: 'Create Impact',
    icon: <Circle size={20} />,
    action:'read',
    resource:'Auth',
    // badge: 'light-warning',
    navLink: '/pages/user-profile/create-an-impact'
    // badgeText: '2'
  },
  {
    id: 'profile',
    title: 'Account Settings',
    icon: <User size={20} />,
    action:'read',
    resource:'Auth',
    // badge: 'light-warning',
    navLink: '/pages/user-profile/account-settings'
    // badgeText: '2'
  },
  {
    id: 'users',
    title: 'Users',
    icon: <User size={20} />,
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
  }
]
