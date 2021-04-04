import './App.css'
import Home from './Home'
import MyTasks from './MyTasks'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import './Navbar.css'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className='app_body'>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/MyTasks'>
              <MyTasks />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
