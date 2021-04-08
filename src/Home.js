import React from 'react'
import './Home.css'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import BorderAllIcon from '@material-ui/icons/BorderAll'
import { Add, Menu, Search } from '@material-ui/icons'
import { useGlobalContext } from './Context'
import { Link } from '@material-ui/core'

function Home() {
  const { userName } = useGlobalContext()

  return (
    <>
      <div className='home'>
        <div className='home_text'>
          <h1>Welcome to Scoro, {userName}</h1>
          <p>Check out any upcoming tasks and recent projects below!</p>
        </div>

        <div className='due_tasks'>
          <ArrowRightIcon />
          <p>Tasks Due Soon</p>
          <p className='all_tasks'>See all My Tasks</p>
        </div>

        <div className='projects'>
          <ArrowDropDownIcon />
          <p>Recent Projects</p>
          <BorderAllIcon className='pro_button' />
        </div>

        <div className='add_projects'>
          <div className='recent_projects'>
            <div className='project_card'>
              <Menu />
            </div>
            <p>project Name</p>
          </div>

          <div className='recent_projects'>
            <div className='add_pro'>
              <Add />
            </div>
            <p>Add Project</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
