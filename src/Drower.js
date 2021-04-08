import React from 'react'
import './Drower.css'
import { useGlobalContext } from './Context'
import { IconButton } from '@material-ui/core'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'

function Drower() {
  const { isDrowerOpen, closeDrower } = useGlobalContext()

  return (
    <>
      <div className={`${isDrowerOpen ? 'drower' : 'drower_close'}`}>
        <IconButton>
          <DoubleArrowIcon onClick={() => closeDrower()} />
        </IconButton>
      </div>
    </>
  )
}

export default Drower
