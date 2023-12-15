import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Create from './components/users/Create.jsx'
import Index from './components/users/Index.jsx'
import './App.css'

import { Routes,Route } from 'react-router-dom'

function App() {
  
  return (
    <Routes>
      <Route path='/' />
      <Route path='/user/index' element={<Index />} />
      <Route path='/user/create' element={<Create />} />

    </Routes>
  )
}

export default App
