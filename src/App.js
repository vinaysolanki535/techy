import './App.css'
import Home from './Home'
import MyTasks from './MyTasks'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import './Navbar.css'
import Goles from './Goles'
import { Dashboard, FormatListNumberedSharp } from '@material-ui/icons'
import Login from './Login'
import { useStateValue } from './StateProvider'
import { auth } from './Firebase'
import { useEffect, useState } from 'react'
import { useGlobalContext } from './Context'
import Signup from './Signup'
import firebase from 'firebase'

function App() {
  const [{ user }, dispatch] = useStateValue()
  const { userLogin, setUserLogin } = useGlobalContext()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The User Is >>>', authUser)
      setUserLogin(false)
      if (authUser) {
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  console.log(`userlogin = ${userLogin}`)
  return (
    <div className='app'>
      <Router>
        {userLogin && <Sidebar />}
        <div className='app_body'>
          {userLogin && <Navbar />}
          <Switch>
            <Route path='/mytasks'>
              <MyTasks />
            </Route>
            <Route path='/goals'>
              <Goles />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
