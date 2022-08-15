import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Projects from "./components/Projects/Projects"



const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home  darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;