import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blog from './pages/blog';
import Event from './pages/event';
import Recruitment from './pages/recruitment';
import Team from './pages/team';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/event' element={<Event />} />
        <Route path='/recruitment' element={<Recruitment />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
