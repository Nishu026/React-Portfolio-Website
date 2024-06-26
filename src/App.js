
import './App.css';
import Education from './components/Education';
import Intro from './components/Intro';
import MyExpertise from './components/MyExpertise';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import {BrowserRouter, Routes} from 'react-router-dom';
import Work from './components/Work';
import Footer from './components/Footer';
import Recommendation from './components/Recommendation';
import Projects from './components/Projects';
import { useState } from 'react';


function App() {
  
  const [mode, setMode] = useState('light');


  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
  
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
  
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
  
    <div className="App">
        <BrowserRouter>
      {/* <Routes> */}
        {/* <Route path="/contact" element={<Contact/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/expertise" element={<MyExpertise/>} />
        <Route path="/projects" element={<div>Projects</div>} /> */}
      {/* </Routes> */}
    
     {/* <Link to="#intro" smooth></Link>
     <Link to="#expertise" smooth></Link>
     <Link to="#education" smooth></Link>
     <Link to="#projects" smooth></Link>
     <Link to="#contact" smooth></Link> */}

     <Sidebar/>
     <Intro/>
      <Navbar/>
     <MyExpertise/>
     <Education/>
     <Work/>
     <Projects/>
     <Contact/>
     <Recommendation/>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
