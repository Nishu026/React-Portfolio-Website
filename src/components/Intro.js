import React from 'react';
import '../App.css';
import '../style/Intro.css';
import ProfilePhoto from '../assets/images/My_Profile_Photo-removebg-preview.png';
import { Button } from '@mui/material';

const Intro = () => {
  return (
    <>
    <div className='intro-container' id='intro'>
      <div className='intro'>
        <h1>I am Nishigandha Patil</h1>
        <p><span style={{ color: '#FFB400' }}>MERN-Stack</span> Developer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita commodi praesentium vel reprehenderit aperiam eveniet officiis omnis dignissimos corporis necessitatibus? Autem ducimus et, mollitia officia quasi quis alias esse eos ad, nihil molestiae at?
        </p>
        <Button variant="contained">Hire Me</Button>
      </div>
      <div className='profile-photo'>
        <img src={ProfilePhoto} alt="logo" />
      </div>
    </div>

  
    </>
  );
};

export default Intro;