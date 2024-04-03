import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  
  return (
    <div>
      <Home />
      <Modal />
      <Sidebar />
    </div>
  )
}

export default App
