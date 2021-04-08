import React from 'react'
import './MyTasks.css'

function TaskList({ task, name }) {
  return (
    <div className='mytasks_card'>
      <p>{name}</p>
    </div>
  )
}

export default TaskList
