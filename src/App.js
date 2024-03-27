
import './App.css';
import Education from './components/Education';
import Intro from './components/Intro';
import MyExpertise from './components/MyExpertise';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Navbar/>}/>
     </Routes>
     <Sidebar/>
     <Intro/>
     <MyExpertise/>
     <Education/>
     <Contact/>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
