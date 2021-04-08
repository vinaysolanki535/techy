import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AppProvider } from './Context'
import { StateProvider } from './StateProvider'
import reducer, { initailState } from './reducer'
import { useGlobalContext } from './Context'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initailState} reducer={reducer}>
      <AppProvider>
        <App />
      </AppProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
