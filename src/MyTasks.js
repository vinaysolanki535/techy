import React, { useState, useEffect } from 'react'
import './MyTasks.css'
import { Add } from '@material-ui/icons'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { IconButton, Link } from '@material-ui/core'
import './Navbar.css'
import Drower from './Drower'
import { useGlobalContext } from './Context'
import { db } from './Firebase'
import { useStateValue } from './StateProvider'
import TaskContainer from './TaskContainer'

function MyTasks() {
  const [{ user }] = useStateValue()
  const [snapShot, setSnapShot] = useState([])
  const { isDrowerOpen } = useGlobalContext()
  const tasks = [
    {
      id: 1,
      type: 'recently',
    },

    {
      id: 2,
      type: 'todo',
    },

    {
      id: 3,
      type: 'doing',
    },

    {
      id: 4,
      type: 'done',
    },
  ]

  return (
    <>
      <div className='mytasks'>
        {tasks.map((val) => {
          return <TaskContainer key={val.id} tasktype={val.type} />
        })}
      </div>
      {isDrowerOpen && <Drower />}
    </>
  )
}

export default MyTasks
