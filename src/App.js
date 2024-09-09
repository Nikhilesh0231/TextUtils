import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-DarkMode"
      // setInterval(() => {
      // document.title = "TextUtils is amazing"        
      // }, 2000);
      // setInterval(() => {
      // document.title = "Install TextUtils Now!!!!!!!"        
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-LightMode"

    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      {/* in this case default proptype will render and value stored in default proptype can been seen */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
              {/* <About /> */}
              <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </div>
    </>
  );
}

export default App;
