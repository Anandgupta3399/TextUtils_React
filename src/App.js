
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';





// import {
//   BrowserRouter as Router,
//   Routes, // Replace 'Switch' with 'Routes'
//   Route,
// } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'grey'
      showAlert("Dark Mode Has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.background = 'white'
      showAlert("Light Mode Has been enabled", "success")

    }
  }
  return (

    <>
      {/* <Router> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">


         {/* <Routes> */}
  {/* <Route path="/about" element={<About />} />
  <Route path="/" element={<nTextForm showAlert={showAlert} heading="Enter The Text To Aalyze Below" mode={mode} />} />
</Routes> */}
        
        <TextForm showAlert={showAlert} heading="Enter The Text To Aalyze Below" mode={mode} />

        </div>

      {/* </Router> */}


    </>
  );
}

export default App;
