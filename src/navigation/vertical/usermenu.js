import { Home, Circle, User } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    // badge: 'light-warning',
    navLink: '/dashboard'
    // badgeText: '2'
  },
  {
    id: 'impact',
    title: 'Create Impact',
    icon: <Circle size={20} />,
    // badge: 'light-warning',
    navLink: '/pages/user-profile/create-an-impact'
    // badgeText: '2'
  },
  {
    id: 'profile',
    title: 'Account Settings',
    icon: <User size={20} />,
    // badge: 'light-warning',
    navLink: '/pages/user-profile/account-settings'
    // badgeText: '2'
  }
]
