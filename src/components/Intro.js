import React from 'react';
import '../App.css';
import '../style/Intro.css';
import ProfilePhoto from '../assets/images/My_Profile_Photo-removebg-preview.png';
import { Button } from '@mui/material';
import { VscArrowRight } from "react-icons/vsc";

const Intro = () => {
  return (
    <>
      <div className='intro-container' id='intro'>
        <div className='intro'>
          <h1 style={{marginTop: '100px'}}>I'm Nishigandha Patil</h1>
          <span style={{ color: '#FFB400', fontWeight: 'bold', fontSize: '40px' }}>MERN-Stack</span> <span style={{ fontWeight: 'bold', fontSize: '40px' }}>Developer</span>
          <div>
          <p className='para'>
            A passionate web developer with expertise in HTML, CSS, and JavaScript, along with frameworks like React, I specialize in building dynamic and user-friendly websites and web applications. 
          </p>
          </div>
          <Button variant="contained" style={{ backgroundColor: '#FFB400', color: 'black',position: 'relative', top: '30px' }}>Hire Me <VscArrowRight style={{ marginLeft: '10px' }} /></Button>
        </div>
        <div className='profile-photo'>
          <span><img src={ProfilePhoto} alt="logo" /></span>
        </div>
      </div>


    </>
  );
};

export default Intro;