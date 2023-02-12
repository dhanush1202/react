// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React,{useState} from "react";
import Alertbar from "./components/Alertbar";
// let d="dhanush";
function App(props) {

  const [mode, setmode] = useState('light');
  const togglemode = () =>{
    if(mode === 'dark'){
      setmode('light');
      
      document.body.style.backgroundColor='white';
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='#212529';
    }
  }   

  return (
    <>
    <Navbar mode={mode} togglemode={togglemode} />
    <Alertbar/>
    <div className="container">
    <Textform mode={mode} heading="enter something"/>
    </div>
    
    <div className="container my-5">
      <About mode={mode}/>
    </div>
    </>
  );
};

export default App;
