import React, { useState, useEffect } from 'react'
import { Button, IconButton, Input, TextField } from '@material-ui/core'
import {
  CalendarViewDay,
  CheckCircleOutline,
  Close,
  DateRangeSharp,
  MoreHoriz,
  RowingSharp,
} from '@material-ui/icons'
import './MyTasks.css'
import { db } from './Firebase'
import { useStateValue } from './StateProvider'
import TaskList from './TaskList'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Add } from '@material-ui/icons'
import { useGlobalContext } from './Context'
import ReactModal from 'react-modal'

function TaskContainer({ tasktype }) {
  const [{ user }] = useStateValue()
  const [snapShot, setSnapShot] = useState([])
  const {} = useGlobalContext()
  const [openTaskAddModal, setOpenTaskAddModal] = useState(false)
  const [taskValue, setTaskValue] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    getAllTasks()
  }, [user])

  const getAllTasks = async () => {
    await db
      .collection('Users')
      .doc(user.uid)
      .collection('Tasks')
      .orderBy('time', 'desc')
      .onSnapshot((querySnapshot) => {
        setSnapShot(querySnapshot.docs)
      })
  }

  const customStyles = {
    content: {
      position: 'relative',
      backgroundColor: 'white',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      borderRadius: '10px',
      display: 'flex',
      padding: '10px',
      width: '40%',
      top: '50%',
      left: '55%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  const addTask = () => {
    try {
      if (taskValue !== '') {
        db.collection('Users').doc(user.uid).collection('Tasks').doc().set({
          title: taskValue,
          time: Date.now(),
          desc: description,
          tasktype: tasktype,
          duedate: dueDate,
        })
      }

      setOpenTaskAddModal(false)
      setTaskValue('')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='mytasks_tasklist'>
      <ReactModal
        onRequestClose={() => setOpenTaskAddModal(false)}
        style={customStyles}
        isOpen={openTaskAddModal}
      >
        <div style={{ color: 'black', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h3>Add Task</h3>
            <IconButton
              style={{ cursor: 'grab' }}
              onClick={() => setOpenTaskAddModal(false)}
            >
              <Close></Close>
            </IconButton>
          </div>

          <div
            style={{
              height: '0px',
              border: '0.1px solid gray',
              marginTop: '5px',
            }}
          ></div>

          <div style={{ marginTop: '10px' }}>
            <input
              type='text'
              placeholder='Task'
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
              style={{
                border: '1px solid',
                height: '30px',
                width: '98%',
                position: 'relative',
                fontSize: ' 16px',
                borderRadius: '3px',
                outline: 'none',
              }}
            ></input>

            <input
              type='date'
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder='Due Date'
              style={{
                border: '1px solid',
                marginTop: '10px',
                height: '30px',
                width: '98%',
                fontSize: ' 16px',
                position: 'relative',
                borderRadius: '3px',
                outline: 'none',
              }}
            ></input>

            <input
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Description'
              style={{
                border: '1px solid',
                marginTop: '10px',
                height: '30px',
                width: '98%',
                fontSize: ' 16px',
                position: 'relative',
                borderRadius: '3px',
                outline: 'none',
              }}
            ></input>

            <Button
              style={{
                backgroundColor: 'orange',
                color: 'white',
                width: '80%',
                marginLeft: '10%',
                marginTop: '10px',
              }}
              onClick={addTask}
            >
              Submit
            </Button>
          </div>
        </div>
      </ReactModal>

      <div className='mytasks_header'>
        <p style={{ fontSize: '15px' }}>{tasktype}</p>
        <IconButton
          onClick={() => {
            setOpenTaskAddModal(true)
          }}
        >
          <Add style={{ fontSize: 'medium' }} />
        </IconButton>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
      {snapShot.map((val) => {
        return (
          val != null &&
          val.data().tasktype === tasktype && (
            <TaskList
              key={val.id}
              taskType={tasktype}
              docId={val.id}
              title={val.data().title}
              desc={val.data().desc}
              duedate={val.data().duedate}
              tasktype={val.data().tasktype}
            ></TaskList>
          )
        )
      })}
    </div>
  )
}

export default TaskContainer
