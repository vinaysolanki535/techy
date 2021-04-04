import React from 'react'
import './Sidebar.css'
import { IconButton } from '@material-ui/core'
import Logo from './logo.png'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import NotificationsIcon from '@material-ui/icons/Notifications'
import BarChartIcon from '@material-ui/icons/BarChart'
import SportsGolfIcon from '@material-ui/icons/SportsGolf'
import { useGlobalContext } from './Context'

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <div className={`${isSidebarOpen ? 'sidebar' : 'show_sidebar'}`}>
      <div className='sidebar_header'>
        <img src={Logo} alt='name' className='logo_img' />
        <IconButton>
          <MenuIcon
            style={{ color: 'rgb(180, 177, 177)' }}
            onClick={closeSidebar}
          />
        </IconButton>
      </div>
      <div className='sidebar_body'>
        <div className='option'>
          <IconButton>
            <HomeIcon style={{ color: 'rgb(180, 177, 177)' }} />
            <h6 className='icon_text'>Home</h6>
          </IconButton>
          <IconButton>
            <CheckCircleOutlineIcon className='icon' />
            <h6 className='icon_text'>My Tasks</h6>
          </IconButton>
          <IconButton>
            <NotificationsIcon style={{ color: 'rgb(180, 177, 177)' }} />
            <h6 className='icon_text'>Inbox</h6>
          </IconButton>
          <IconButton>
            <BarChartIcon className='icon' />
            <h6 className='icon_text'>Portfolio</h6>
          </IconButton>
          <IconButton>
            <SportsGolfIcon style={{ color: 'rgb(180, 177, 177)' }} />
            <h6 className='icon_text'>Goles</h6>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
