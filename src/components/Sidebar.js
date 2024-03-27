import React from 'react';
import '../App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinearProgress } from '@mui/material';
import {Button} from '@mui/material';
import ProfilePhoto from '../assets/images/My_Profile_Photo-removebg-preview.png';
import Divider from '@mui/material/Divider';

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
        <h1>Nishigandha Patil</h1>
        <h2 className="job-title">Frontend Developer</h2>

        <div className="social">
          <span className="social-icon"><InstagramIcon/></span>
          <span className="social-icon"><FacebookIcon/></span>
          <span className="social-icon"><LinkedInIcon/></span>
          <span className="social-icon"><GitHubIcon/></span>
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
          <span className="info-label">Age:</span>
          <span className="info-value">23</span>
        </div>
        <div className="info-item">
          <span className="info-label">Residence:</span>
          <span className="info-value">Mumbai, MH</span>
        </div>
        <div className="info-item">
          <span className="info-label">Freelance:</span>
          <span className="info-value">Available</span>
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
          <LinearProgress variant="determinate" value={100} />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '100%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">English</span>
          <LinearProgress variant="determinate" value={100} />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">Marathi</span>
          <LinearProgress variant="determinate" value={100}/>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
      <Divider/>

      <div className="sidebar-section">
        <h3 className="section-title">Skills</h3>
        <div className="skill-item">
          <span className="skill-label">Html</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">CSS</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">Js</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">MongoDB</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-label">Python</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
      <Divider/>

      <div className="sidebar-section">
        <h3 className="section-title">Extra Skills</h3>
        <ul className="extra-skills-list">
          <li>Bootstrap, MUI</li>
          <li>LLM, Sass CSS, Less</li>
          <li>AI/ML/DL/NLP</li>
          <li>GIT Knowledge</li>
        </ul>
        <Button variant="contained"  onClick={handleDownload} >Download CV</Button>
      </div>   

    </aside>
  );
};

export default Sidebar;