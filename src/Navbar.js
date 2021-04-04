import React, { useState, useEffect } from 'react'
import { IconButton, Button, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useGlobalContext } from './Context'
import { Add, Menu, Search } from '@material-ui/icons'

function Navbar() {
  const { isSidebarOpen, openSidebar } = useGlobalContext()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <nav className='navbar'>
      <div className='navbar_left'>
        <IconButton className={`${isSidebarOpen ? 'hide' : 'show'}`}>
          <MenuIcon
            style={{ color: 'rgb(180, 177, 177)' }}
            onClick={openSidebar}
          />
        </IconButton>
        <h2 className='h2_text'>Home</h2>
      </div>
      <div className='navbar_right'>
        <div
          className={`${
            isSearchOpen ? 'nav_search nav_search_click' : 'nav_search'
          }`}
          onClick={() => {
            setIsSearchOpen(!isSearchOpen)
          }}
        >
          <div>
            <Search className='nav-searchIcon' />
          </div>
          <input className='nav-searchInput' />
        </div>

        <Button>
          <Add />
        </Button>

        <Avatar className='avatar'>VS</Avatar>
      </div>
    </nav>
  )
}

export default Navbar
