import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBank,
  cilHome,
  cilEducation,
  cilMoodVeryGood
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Resources',
  },
  {
    component: CNavItem,
    name: 'College Financing',
    to: '/views/financing',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Scholarships',
    to: '/views/scholarships',
    icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'About',
  },
  {
    component: CNavItem,
    name: 'About us',
    to: '/views/about/',
    icon: <CIcon icon={cilMoodVeryGood} customClassName="nav-icon" />
  }
]

export default _nav
