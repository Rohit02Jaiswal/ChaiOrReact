import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Form from "./Pages/Form/Form"
import React from "react"
import HomePage from "./Pages/HomePage/HomePage"
import Counter from "./Pages/Counter/Counter"

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
