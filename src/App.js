import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App() {

  const [darkMode, setdarkMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = (cls) => {
    if (darkMode === 'light') {
      setdarkMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enable", 'success')
    }
    else {
      setdarkMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enable", 'success');
    }
  }

  return (
    <>
      <Router basename='/TextUtils'>
        <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} contactText="Contact Us" />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm heading="Use our TextUtils" mode={darkMode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={darkMode} />} />
          {/* 404 Page Not Found Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;