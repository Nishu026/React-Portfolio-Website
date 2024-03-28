import React from 'react';
import '../style/Contact.css';
import ChatIcon from '@mui/icons-material/Chat';

const App = () => {
  return (
    <div className="contact-container" id='contact-me'>
      <span style={{ margin: 0, padding: 0, }}><h2>Leave Us Your Info</h2></span>
      <span style={{ margin: 0, padding: 0, position: 'absolute', right: '19.5%' }}> <h2>Contact Information</h2> </span>

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
          <button className='btn' type="submit">SEND MESSAGE</button>
        </div>

        <div className='contact info1'>
          <ChatIcon style={{backgroundColor: '#FFB400', borderRadius: '50%' , padding: '5px'}}/>
        <div className="info-item">
          <span className="info-label">Country:</span>
          <span className="info-value">India</span>
        </div>
        <div className="info-item">
          <span className="info-label">City:</span>
          <span className="info-value">Mumbai, MH</span>
        </div>
        <div className="info-item">
          <span className="info-label">Street:</span>
          <span className="info-value">Palghar-East</span>
        </div>
        </div>


        <div className="contact info2">
        <ChatIcon style={{backgroundColor: '#FFB400', borderRadius: '50%' , padding: '5px'}}/>
        <div className="info-item">
          <span className="info-label">Country:</span>
          <span className="info-value">India</span>
        </div>
        <div className="info-item">
          <span className="info-label">City:</span>
          <span className="info-value">Mumbai, MH</span>
        </div>
        <div className="info-item">
          <span className="info-label">Street:</span>
          <span className="info-value">Palghar-East</span>
        </div>
        </div>

        <div className="contact info3">
        <ChatIcon style={{backgroundColor: '#FFB400', borderRadius: '50%' , padding: '5px'}}/>
        <div className="info-item">
          <span className="info-label">Country:</span>
          <span className="info-value">India</span>
        </div>
        <div className="info-item">
          <span className="info-label">City:</span>
          <span className="info-value">Mumbai, MH</span>
        </div>
        <div className="info-item">
          <span className="info-label">Street:</span>
          <span className="info-value">Palghar-East</span>
        </div>

        </div>
      </div>
      <div className='contact-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.452052470313!2d72.8594341!3d19.1136646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c05b7fc89%3A0xbe87eb057f3aafda!2sAndheri%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1711629999162!5m2!1sen!2sin" width="100%"  height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
      </div>
    </div>
  );
};

export default App;