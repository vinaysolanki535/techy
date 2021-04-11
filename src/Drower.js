import React from 'react'
import './Drower.css'
import { useGlobalContext } from './Context'
import { IconButton } from '@material-ui/core'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import { useEffect, useState } from 'react'
import { db } from './Firebase'
import { useStateValue } from './StateProvider'
import { Button } from '@material-ui/core'
import {
  CalendarViewDayRounded,
  DateRangeSharp,
  Done,
} from '@material-ui/icons'

function Drower() {
  const { isDrowerOpen, drowarData, setIsDrowerOpen } = useGlobalContext()
  const [title, setTitle] = useState()
  const [{ user }] = useStateValue()
  const [desc, setDesc] = useState()
  const [duedate, setDuedate] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    console.log(`drower id is `, drowarData.docId)
    const doc = await db
      .collection('Users')
      .doc(user.uid)
      .collection('Tasks')
      .doc(drowarData.docId)
      .get()

    doc.data() && setTitle(doc.data().title)
    doc.data() && setDesc(doc.data().desc)
    doc.data() && setDuedate(doc.data().duedate)
  }

  const updateTask = async () => {
    await db
      .collection('Users')
      .doc(user.uid)
      .collection('Tasks')
      .doc(drowarData.docId)
      .update({
        title: title,
        desc: desc,
        duedate: duedate,
        time: Date.now(),
      })
    setIsDrowerOpen(false)
  }

  const deleteTask = async (e) => {
    e.preventDefault()

    await db
      .collection('Users')
      .doc(user.uid)
      .collection('Tasks')
      .doc(drowarData.docId)
      .delete()
    setIsDrowerOpen(false)
  }

  const markDone = async (e) => {
    await db
      .collection('Users')
      .doc(user.uid)
      .collection('Tasks')
      .doc(drowarData.docId)
      .update({
        tasktype: 'Done',
        time: Date.now(),
      })

    setIsDrowerOpen(false)
  }

  const markDoing = async (e) => {
    await db
      .collection('Users')
      .doc(user.uid)
      .collection('Tasks')
      .doc(drowarData.docId)
      .update({
        tasktype: 'Doing',
        time: Date.now(),
      })

    setIsDrowerOpen(false)
  }

  return (
    <>
      <div className={`${isDrowerOpen ? 'drower' : 'drower_close'}`}>
        <div className='drawer_header'>
          {drowarData.taskType === 'done' && (
            <Button onClick={deleteTask} variant='contained' color='primary'>
              Delete
            </Button>
          )}

          {drowarData.taskType !== 'done' && (
            <Button onClick={markDone}>Mark Done</Button>
          )}
          {drowarData.taskType !== 'doing' && (
            <Button onClick={markDoing}>Mark Doing</Button>
          )}
        </div>

        <div className='task-titleContainer'>
          <label>Task Title</label>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            className='task-titleInput'
            value={title}
          ></input>
        </div>

        <div className='task-info-container'>
          <label>Due date</label>
          <input
            onChange={(e) => setDuedate(e.target.value)}
            value={duedate}
            type='date'
          ></input>
        </div>

        <div className='task-info-container'>
          <label>Task Description</label>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            type='text'
          ></textarea>
        </div>

        <div className='task-info-container'>
          <Button onClick={updateTask}>Submit</Button>
        </div>
      </div>
    </>
  )
}

export default Drower
