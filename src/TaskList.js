import React, { useRef, useEffect, useState } from 'react'
import './MyTasks.css'
import { useGlobalContext } from './Context'

let useClickOutside = (handler) => {
  const domNode = useRef()
  useEffect(() => {
    let maybeHandler = (e) => {
      if (!domNode.current && domNode.current.contains(e.target)) {
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

function TaskList({ title, desc, duedate, docId, tasktype }) {
  const { isDrowerOpen, setDrowarData, setIsDrowerOpen } = useGlobalContext()

  const DrowarDataSend = () => {
    setIsDrowerOpen(!isDrowerOpen)
    setDrowarData({
      docId: docId,
      taskType: tasktype,
    })
  }

  const domNode = useClickOutside(() => {
    setIsDrowerOpen(false)
  })

  return (
    <>
      <div
        className='mytasks_card'
        onClick={() => DrowarDataSend()}
        ref={domNode}
      >
        <div className='task_title'>
          <h4>{title}</h4>
          <h6>{duedate}</h6>
        </div>
        <div className='task_desc'>
          <p>{desc}</p>
        </div>
      </div>
    </>
  )
}

export default TaskList
