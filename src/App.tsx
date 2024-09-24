import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Projects from "./pages/Home/sections/Projects/Projects"
import About from "./pages/Home/sections/About/About"
import Contact from "./pages/Home/sections/Contact/Contact"
import NavBar from "./components/NavBar/NavBar"
import React from "react"

const App: React.FC = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  )
}

export default App
