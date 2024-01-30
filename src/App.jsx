import Sidebar from './components/Sidebar.jsx'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ImageSlider from './components/ImageSlider.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'


function App() {

  return (
    <>
    <Sidebar />
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/projects" element={ <Projects /> }></Route>
        <Route path="/contact" element={ <Contact /> }></Route>
      </Routes>
    </>
  )
}

export default App
