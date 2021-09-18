import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Resources',
  },
  {
    component: CNavItem,
    name: 'College Financing',
    to: '/theme/colors',
    icon: <CIcon customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Scholarships',
    to: '/theme/typography',
    icon: <CIcon customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'About',
  },
  {
    component: CNavItem,
    name: 'About us',
    to: '/about-us',
    icon: <CIcon customClassName="nav-icon>" />,
  }
]

export default _nav
