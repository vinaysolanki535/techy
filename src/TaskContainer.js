import React, { useState, useEffect } from 'react'
import './MyTasks.css'
import { db } from './Firebase'
import { useStateValue } from './StateProvider'
import TaskList from './TaskList'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { IconButton, Link } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useGlobalContext } from './Context'

function TaskContainer({ tasktype }) {
  const [{ user }] = useStateValue()
  const [snapShot, setSnapShot] = useState([])
  const { openDrower } = useGlobalContext()

  useEffect(() => {
    getAllTasks()
  }, [])

  const getAllTasks = () => {
    console.log(`task container ${user.uid}`)
    db.collection('Users')
      .doc(user.uid)
      .collection('Tasks')
      .onSnapshot((querySnapshot) => {
        setSnapShot(querySnapshot.docs)
      })
  }

  return (
    <div className='mytasks_header'>
      <p style={{ fontSize: '15px' }}>{tasktype}</p>
      <IconButton onClick={() => openDrower()}>
        <Add style={{ fontSize: 'medium' }} />
      </IconButton>
      <IconButton>
        <MoreHorizIcon />
      </IconButton>

      {snapShot.map((val) => {
        return (
          val != null &&
          val.tasktype === tasktype && (
            <TaskList key={val.id} task={tasktype} name={val.name} />
          )
        )
      })}
    </div>
  )
}

export default TaskContainer
