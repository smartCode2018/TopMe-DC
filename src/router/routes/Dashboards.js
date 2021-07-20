import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/admin/dashboard',
    exact: true,
    component: lazy(() => import('../../views/dashboard/admin')),
    meta:{
      action:'read',
      resource:'Admin'
    }
  },
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/dashboard/ecommerce')),
    exact: true,
    meta:{
      action:'read',
      resource:'Auth'
    }
  }
]

export default DashboardRoutes
