import React from 'react'
import ProfilePhoto from '../assets/images/My_Profile_Photo-removebg-preview.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';
import { LinearProgress } from '@mui/material';


const Aside = () => {
    return (
        <aside className='sidebar'>
            <div className="sidebar-info">
                <figure>
                    <img src={ProfilePhoto} alt='profile' style={{ width: 200, height: 200, borderRadius: 100, border: '3px solid black' }} />
                </figure>
                <div className="info-content">
                    <h1 className='name'>Nishigandha Patil</h1>
                    <p className='job-title'>Frontend Developer</p>
                </div>
                <div className="social">
                    <span className="social-icon"><InstagramIcon /></span>
                    <span className="social-icon"><FacebookIcon /></span>
                    <span className="social-icon"><LinkedInIcon /></span>
                    <span className="social-icon"><GitHubIcon /></span>
                </div>
                <Divider />

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





            </div>

        </aside>

    )
}

export default Aside