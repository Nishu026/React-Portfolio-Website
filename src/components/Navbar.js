import React from 'react';
import '../style/Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SourceIcon from '@mui/icons-material/Source';
import ChatIcon from '@mui/icons-material/Chat';
import { HashLink as Link } from 'react-router-hash-link';
const SideNav = () => {
  return (
<div className="sidenav">
   <Link className='sidenav-items' to="#" title='Home' id="intro" smooth><HomeIcon/></Link>
   <Link className='sidenav-items' to="#expertise" title='My Expertise' smooth><CodeIcon/></Link>
   <Link className='sidenav-items' to="#education" title='Education' smooth><SchoolIcon/></Link>
   <Link className='sidenav-items' to="#work-history" title='Work History' smooth><WorkHistoryIcon/></Link>
   <Link className='sidenav-items' to="#projects" title='Projects' smooth><SourceIcon/></Link>
   <Link className='sidenav-items' to="#contact-me" title='Contact Me' smooth><ChatIcon/></Link>
</div >
 );
};

export default SideNav;