import React from 'react'
import './Goles.css'
import { Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import FilterListIcon from '@material-ui/icons/FilterList'

function Goles() {
  return (
    <>
      <div className='goles'>
        <div className='goles_add'>
          <Button
            color='primary'
            variant='contained'
            startIcon={<Add style={{ fontSize: 'medium' }} />}
          >
            Add Goal
          </Button>
          <Button
            variant='contained'
            startIcon={<FilterListIcon style={{ fontSize: 'medium' }} />}
            size='small'
            disableElevation
          >
            Filter
          </Button>
        </div>

        <div className='points'>
          <p>Name</p>
          <p>Team</p>
          <p>Due date</p>
          <p>Progress</p>
        </div>

        <div className='goles_card'>
          <h3>asana clone</h3>
          <p className='extra'>zip Bots</p>
          <p className='extra'>Apr 1-10</p>
          <p>40%</p>
        </div>

        <div className='goles_card'>
          <h3>asana clone</h3>
          <p className='extra'>zip Bots</p>
          <p className='extra'>Apr 1-10</p>
          <p>40%</p>
        </div>
      </div>
    </>
  )
}

export default Goles
