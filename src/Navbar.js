import React, { useState, useEffect, useRef } from 'react'
import { IconButton, Button, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useGlobalContext } from './Context'
import { Add, Menu, Search } from '@material-ui/icons'
import firebase from 'firebase'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

let useClickOutside = (handler) => {
  const domNode = useRef()
  useEffect(() => {
    let maybeHandler = (e) => {
      if (domNode.current && !domNode.current.contains(e.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', maybeHandler)

    return () => {
      document.removeEventListener('mousedown', maybeHandler)
    }
  })

  return domNode
}

function Navbar() {
  const { setUserLogin } = useGlobalContext()
  const {
    isSidebarOpen,
    openSidebar,
    headerName,
    closeDrower,
  } = useGlobalContext()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const domNode = useClickOutside(() => {
    setIsSearchOpen(false)
  })

  return (
    <nav className='navbar'>
      <div className='navbar_left'>
        <IconButton className={`${isSidebarOpen ? 'hide' : 'show'}`}>
          <MenuIcon
            style={{ color: 'rgb(180, 177, 177)' }}
            onClick={openSidebar}
          />
        </IconButton>
        <h2 className='h2_text'>{headerName}</h2>
      </div>
      <div className='navbar_right'>
        <div
          ref={domNode}
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
        <Link to='/Login'>
          {' '}
          <Button
            variant='contained'
            color='secondary'
            size='small'
            onClick={() => {
              firebase.auth().signOut()
              setUserLogin(false)
            }}
          >
            SignOut
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
