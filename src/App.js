import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Skills from './pages/skill';
import Experiences from './pages/experience';
import Projects from './pages/project';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skills />} />
        <Route path='/experience' element={<Experiences />} />
        <Route path='/project' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
