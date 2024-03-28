import React from 'react'
import '../style/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p>&copy; 2024-2025. All Rights Reserved. Nishigandha Patil</p>
        </div>
        <div className="social">
          <span className="social-icon"><InstagramIcon/></span>
          <span className="social-icon"><FacebookIcon/></span>
          <span className="social-icon"><LinkedInIcon/></span>
          <span className="social-icon"><GitHubIcon/></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
