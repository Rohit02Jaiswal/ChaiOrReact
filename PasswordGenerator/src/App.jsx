import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'

function App() {

  return (
   <Router>
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
   </Router>
  )
}

export default App
