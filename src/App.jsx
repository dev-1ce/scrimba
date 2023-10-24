import React from 'react'
import logo from "./assets/Laura.png"
import Data from "./components/main"
import './app.css'


function App() {
  return (
      <div className='container'>
        <img src={logo} alt="" />
        <Data />
      </div>
  )
}

export default App
