import React from 'react'
import {
  AllOut,
  CheckCircle,
  Dashboard,
  Home,
  InboxOutlined,
} from '@material-ui/icons'

const Data = [
  {
    link: '/home',
    name: 'Home',
    icon: <Home fontSize='small' />,
  },
  {
    link: '/mytasks',
    name: 'My Tasks',
    icon: <CheckCircle fontSize='small' />,
  },
  {
    link: '/dashboard',
    name: 'Dashboard',
    icon: <Dashboard fontSize='small' />,
  },
  {
    link: '/inbox',
    name: 'Inbox',
    icon: <InboxOutlined fontSize='small' />,
  },
  {
    link: '/goals',
    name: 'My Goals',
    icon: <AllOut fontSize='small' />,
  },
]

export default Data
