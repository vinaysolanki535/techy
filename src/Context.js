import React, { useState, useContext, useEffect } from 'react'
import { db } from './Firebase'
import { useStateValue } from './StateProvider'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [headerName, setHeaderName] = useState('Home')
  const [userName, setUserName] = useState(null)
  const [uId, setUId] = useState(null)
  const [{ user }, dispatch] = useStateValue()
  const [isDrowerOpen, setIsDrowerOpen] = useState(false)
  const [userLogin, setUserLogin] = useState(false)

  useEffect(() => {
    if (user != null) {
      db.collection('Users')
        .doc(user.uid)
        .get()
        .then((val) => {
          if (val.exists) {
            setUserName(val.data().name)
            setUId(user.uid)
            console.log('user accepted')
          }
        })
    } else {
      console.log('user is null')
    }
  }, [user])

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openDrower = () => {
    setIsDrowerOpen(true)
  }

  const closeDrower = () => {
    setIsDrowerOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        headerName,
        setHeaderName,
        setUserName,
        setUId,
        userName,
        isDrowerOpen,
        setIsDrowerOpen,
        openDrower,
        closeDrower,
        userLogin,
        setUserLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
