import React from 'react'
import './MyTasks.css'
import { Add } from '@material-ui/icons'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { IconButton } from '@material-ui/core'

function MyTasks() {
  return (
    <>
      <div className='mytasks'>
        <div className='mytasks_tasklist'>
          <div className='mytasks_header'>
            <p style={{ fontSize: '15px' }}>Recently Asigned</p>
            <IconButton>
              <Add style={{ fontSize: 'medium' }} />
            </IconButton>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </div>

          <div className='mytasks_card'></div>
        </div>

        <div className='mytasks_tasklist'>
          <div className='mytasks_header'>
            <p style={{ fontSize: '15px' }}>To Do</p>
            <IconButton>
              <Add style={{ fontSize: 'medium' }} />
            </IconButton>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </div>

          <div className='mytasks_card'></div>
        </div>

        <div className='mytasks_tasklist'>
          <div className='mytasks_header'>
            <p style={{ fontSize: '15px' }}>Doing</p>
            <IconButton>
              <Add style={{ fontSize: 'medium' }} />
            </IconButton>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </div>

          <div className='mytasks_card'></div>
        </div>

        <div className='mytasks_tasklist'>
          <div className='mytasks_header'>
            <p style={{ fontSize: '15px' }}>Done</p>
            <IconButton>
              <Add style={{ fontSize: 'medium' }} />
            </IconButton>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </div>

          <div className='mytasks_card'></div>
        </div>
      </div>
    </>
  )
}

export default MyTasks
