import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Profile from './components/Profile'
import Session from './components/Session'


function App() {
  return (
    <div className ='dashboard'>
      <Sidebar />
    <div className='dashboard--content'>
      <Content />
      <Profile />
    </div>
      
    </div>
  )
}

export default App