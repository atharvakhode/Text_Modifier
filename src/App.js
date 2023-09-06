import React, { useState } from 'react';
import './App.css';
import Navbar from './customComponents/Navbar';
import TextBox from './customComponents/TextBox';
import About from './customComponents/About';
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark') //weather dark mode is enabled or not

  //Dark mode Button function
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = '#ccfcff' //light mode
      document.body.style.color = 'black'
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#314243' // dark mode
      document.body.style.color = 'white'
    }
  }

  return (
    <>
      <Routes>

        <Route path='/' element={
          <>
            <Navbar
              title='Welcome to text modifier!'
              aboutText='about us'
              mode={mode}
              toggleMode={toggleMode}
            />
            <div className="container my-3">
              <TextBox
                heading='Enter the text here'
                mode={mode}
              />
            </div>
          </>
        } />

        <Route path='/about' element={
          <>
            <Navbar
              title='Welcome to text modifier!'
              aboutText='about us'
              mode={mode}
              toggleMode={toggleMode}
            />
            <div className="container my-3">
              <About
                mode={mode}
                toggleMode={toggleMode}
              />
            </div>
          </>
        } />

      </Routes>
    </>
  );
}

export default App;

















