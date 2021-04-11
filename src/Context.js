import React, { useState, useContext, useEffect } from 'react'
import { db } from './Firebase'
import { useStateValue } from './StateProvider'
import Login from './Login'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [headerName, setHeaderName] = useState('Home')
  const [userName, setUserName] = useState(null)
  const [uId, setUId] = useState(null)
  const [{ user }, dispatch] = useStateValue()
  const [isDrowerOpen, setIsDrowerOpen] = useState(false)
  const [userLogin, setUserLogin] = useState(false)
  const [drowarData, setDrowarData] = useState({})

  useEffect(() => {
    if (user != null) {
      db.collection('Users')
        .doc(user.uid)
        .get()
        .then((val) => {
          if (val.exists) {
            setUserName(val.data().name)
            setUId(user.uid)
            setUserLogin(true)
            console.log('user accepted')
          }
        })
    } else {
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
        drowarData,
        setDrowarData,
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
