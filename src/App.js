
import './App.css';
import Education from './components/Education';
import Intro from './components/Intro';
import MyExpertise from './components/MyExpertise';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WorkHistory from './components/WorkHistory';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        {/* <Route path="/contact" element={<Contact/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/expertise" element={<MyExpertise/>} />
        <Route path="/projects" element={<div>Projects</div>} /> */}
      </Routes>
    
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
     <WorkHistory/>
     {/* <Contact/> */}
    
     </div>
     </BrowserRouter>
  );
}

export default App;
