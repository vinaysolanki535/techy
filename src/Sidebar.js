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
import Data from '../src/Data/Data'
import { Link } from 'react-router-dom'

function Sidebar() {
  const { isSidebarOpen, closeSidebar, setHeaderName } = useGlobalContext()

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
          {Data.map((data) => {
            return (
              <Link to={data.link}>
                <div
                  className='option_card'
                  onClick={() => setHeaderName(`${data.name}`)}
                >
                  {data.icon}
                  &nbsp; &nbsp;
                  {data.name}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
