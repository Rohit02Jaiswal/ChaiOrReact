import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Form from "./Pages/Form/Form"
import React from "react"
import HomePage from "./Pages/HomePage/HomePage"

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
