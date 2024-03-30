import React from 'react';
import '../App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Button} from '@mui/material';
import ProfilePhoto from '../assets/images/My_Profile_Photo-removebg-preview.png';
import Divider from '@mui/material/Divider';
import { FaBootstrap } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FaGitAlt } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { PiDownloadSimpleFill } from "react-icons/pi";

const Sidebar = () => {

  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the path of your CV file
    link.href = '/path/to/your/CV.pdf';
    // Set the download attribute to specify the file name
    link.download = 'YourCV.pdf';
    // Append the anchor element to the body
    document.body.appendChild(link);
    // Trigger a click event on the anchor element
    link.click();
    // Clean up by removing the anchor element
    document.body.removeChild(link);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="profile-picture">
          <figure>
          <img src={ProfilePhoto} style={{width: 200, height: 200, borderRadius: 100, border: '3px solid black'}} alt="logo" />
          </figure>
        </div>
        <div className="info-content">
        <h1>Nishigandha Patil</h1>
        <p className="job-title">Front-End Developer</p>
        </div>
        <div className="social">
          <a href="mailto:nishupatil026@gmail.com" target='_blank' rel="noreferrer"><span className="social-icon"><MailIcon/></span></a>
          <a href='https://www.linkedin.com/in/nishigandha-patil-aa6645294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel="noreferrer"><span className="social-icon"><LinkedInIcon/></span></a>
          <a href='https://github.com/Nishu026' target='_blank' rel="noreferrer"><span className="social-icon"><GitHubIcon/></span></a>
          <a href='https://www.instagram.com/nishupatil26?igsh=MTg4ZHo5dDVrY25rOQ==' target='_blank' rel="noreferrer"><span className="social-icon"><InstagramIcon/></span></a>
        </div>
        <Divider/>

        {/* <div className="rating">
          <span className="rating-icon">★</span>
          <span className="rating-icon">★</span>
          <span className="rating-icon">★</span>
          <span className="rating-icon">★</span>
          <span className="rating-icon">★</span>
          <span className="rating-icon">★</span>
        </div> */}
        <div className="info-item">
          <span className="info-label" >Age:</span>
          <span className="info-value">23</span>
        </div>
        <div className="info-item">
          <span className="info-label">Residence:</span>
          <span className="info-value">Mumbai, MH</span>
        </div>
        <div className="info-item">
          <span className="info-label">Freelance:</span>
          <span className="info-value" style={{ color: 'green' }}>Available</span>
        </div>
        <div className="info-item">
          <span className="info-label">Address:</span>
          <span className="info-value">Palghar-East,MH</span>
        </div>
      </div>
      <Divider/>

      <div className="sidebar-section">
        <h3 className="section-title">Languages</h3>
        <div className="skill-item">
          <span className="skill-label">Hindi</span>
          <span style={{marginLeft: '75%'}}>95%</span>
          <div className="skill-bar" data-percent="95%">
            <div className="skill-progress" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">English</span>
         <span style={{marginLeft: '70%'}}>85%</span>
          <div className="skill-bar" data-percent="85%">
            <div className="skill-progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">Marathi</span>
          <span style={{marginLeft: '69%'}}>99%</span>
          <div className="skill-bar" data-percent="99%">
            <div className="skill-progress" style={{ width: '99%' }}></div>
          </div>
        </div>
      </div>
      <Divider/>

      <div className="sidebar-section">
        <h3 className="section-title">Skills</h3>
        <div className="skill-item">
          <span className="skill-label">Html</span>
          <span style={{marginLeft: '76%' }}>90%</span>
          <div className="skill-bar" data-percent="90%">
            <div className="skill-progress" style={{ width: '90%' }} ></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">CSS</span>
          <span style={{marginLeft: '78%' }}>85%</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">Js</span>
          <span style={{marginLeft: '83%' }}>80%</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">MongoDB</span>
          <span style={{marginLeft: '64%' }}>75%</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">Python</span>
          <span style={{marginLeft: '72%' }}>85%</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
      <Divider/>

      <div className="sidebar-section">
        <h3 className="section-title">Extra Skills</h3>
        <ul className="extra-skills-list">
          <li><FaBootstrap style={{color: '#FFB400',width:'20px',height:'20px'}}/>Bootstrap, MUI</li>
          <li> <BiSolidFileCss style={{color: '#FFB400',width:'20px',height:'20px',marginRight:'5px'}}/>LLM, Sass CSS, Less</li>
          <li> <GiBrain style={{color: '#FFB400',width:'20px',height:'20px'}}/>AI/ML/DL/NLP</li>
          <li> <FaGitAlt  style={{color: '#FFB400',width:'20px',height:'20px'}}/>GIT Knowledge</li>
        </ul>
        <Button variant="contained" style={{backgroundColor: '#FFB400',color:'black',width:'100%',marginTop:'10px'}} onClick={handleDownload} >Download CV <PiDownloadSimpleFill style={{marginLeft:'10px',color:'black',width:'20px',height:'20px' }}/></Button>
      </div>   

    </aside>
  );
};

export default Sidebar;