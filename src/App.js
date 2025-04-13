import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/certificates">Certificates</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        
        <div className="social-links">
          <a href="https://github.com/surya0904shankar" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/s-surya-310ba5206" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://leetcode.com/u/Surya0904/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/leetcode.svg" alt="LeetCode" />
          </a>
          <a href="https://www.hackerrank.com/profile/suryas0904" target="_blank" rel="noopener noreferrer">
            <img src="/icons/hackerrank.svg" alt="HackerRank" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/suryaswa8d/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/geeksforgeeks.svg" alt="GeeksforGeeks" />
          </a>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 