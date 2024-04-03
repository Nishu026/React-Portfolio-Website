import React from 'react'
import '../style/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p>&copy; 2024-2025. All Rights Reserved. Nishigandha Patil.</p>
        </div>
        <div className="footer-social">
        <a href="mailto:nishupatil026@gmail.com" target='_blank' rel="noreferrer"><span className="footer-social-icon"><MailIcon style={{fontSize: 15}}/></span></a>
          <a href='https://www.linkedin.com/in/nishigandha-patil-aa6645294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel="noreferrer"><span className="footer-social-icon"><LinkedInIcon style={{fontSize: 15}}/></span></a>
          <a href='https://github.com/Nishu026' target='_blank' rel="noreferrer"><span className="footer-social-icon"><GitHubIcon style={{fontSize: 15}}/></span></a>
          <a href='https://www.instagram.com/nishupatil26?igsh=MTg4ZHo5dDVrY25rOQ==' target='_blank' rel="noreferrer"><span className="footer-social-icon"><InstagramIcon style={{fontSize: 15}}/></span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
