import React from 'react';
import '../style/Contact.css';
import PublicIcon from '@mui/icons-material/Public';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Button } from '@mui/material';

const App = () => {
  return (
    <section>
    <div className="contact-container" id='contact-me'>
      <span style={{ margin: 0, padding: 0, }}><h1>Leave Us Your Info</h1></span>
      <span style={{ margin: 0, padding: 0, position: 'absolute', right: '12.5%' }}> <h1>Contact Information</h1> </span>

      <div className="box">
        <div className="contact form">
          <form>
            <div className="form-box">
              <div className="row100">
                <div className="input-box">
                  <span className='label'>Your Full Name (Required)</span>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="input-box">
                  <span className='label'>Your Email (Required)</span>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="input-box">
                  <span className='label'>Subject</span>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="input-box">
                  <span className='label'>Message</span>
                  <textarea type="text" id="name" name="name" required />
                </div>
              </div>
            </div>
          </form>
          <Button variant="contained" style={{ backgroundColor: '#FFB400', color: 'black', position: 'relative',left: '10px' }}>SEND MESSAGE</Button>
        </div>

        <div className='contact info1'>
          <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PublicIcon style={{backgroundColor: '#FFB400', borderRadius: '50%' , padding: '5px'}}/></span>
        <div className="contact-info-item">
          <span className="contact-info-label">Country:</span>
          <span className="contact-info-value">India</span>
        </div>
        <div className="contact-info-item">
          <span className="contact-info-label">City:</span>
          <span className="contact-info-value">Mumbai, MH</span>
        </div>
        <div className="contact-info-item">
          <span className="contact-info-label">Street:</span>
          <span className="contact-info-value">Palghar-East</span>
        </div>
        </div>


        <div className="contact info2">
        <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <ContactMailIcon style={{backgroundColor: '#FFB400', borderRadius: '50%' , padding: '5px'}}/></span>
        <div className="contact-info-item">
          <span className="contact-info-label">Contact-Country:</span>
          <span className="contact-info-value">India</span>
        </div>
        <div className="contact-info-item">
          <span className="contact-info-label">City:</span>
          <span className="contact-info-value">Mumbai, MH</span>
        </div>
        <div className="contact-info-item">
          <span className="contact-info-label">Street:</span>
          <span className="contact-info-value">Palghar-East</span>
        </div>
        </div>

        <div className="contact info3">
        <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}><MiscellaneousServicesIcon style={{backgroundColor: '#FFB400', borderRadius: '50%' , padding: '5px'}}/></span>
        <div className="contact-info-item">
          <span className="contact-info-label">Country:</span>
          <span className="contact-info-value">India</span>
        </div>
        <div className="contact-info-item">
          <span className="contact-info-label">City:</span>
          <span className="contact-info-value">Mumbai, MH</span>
        </div>
        <div className="contact-info-item">
          <span className="contact-info-label">Street:</span>
          <span className="contact-info-value">Palghar-East</span>
        </div>

        </div>
      </div>
      <div className='contact-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.452052470313!2d72.8594341!3d19.1136646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c05b7fc89%3A0xbe87eb057f3aafda!2sAndheri%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1711629999162!5m2!1sen!2sin" width="100%"  height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
      </div>
    </div>
    </section>
  );
};

export default App;