import React from 'react';
import '../style/Contact.css';

const App = () => {
  return (
    <div className="container" id='contact-me'>
      <div className="form-section">
        <h2>Leave Us Your Info</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Full Name (Required)</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email (Required)</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit" className="send-message">SEND MESSAGE</button>
        </form>
      </div>
      <div className="contact-section">
        <h2>Contact Information</h2>
        <div className="contact-info">
          <div className="info-group">
            <h3>Country:</h3>
            <p>Bangladesh</p>
          </div>
          <div className="info-group">
            <h3>City:</h3>
            <p>Dhaka</p>
          </div>
          <div className="info-group">
            <h3>Street:</h3>
            <p>35 Vhatara, Badda</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="info-group">
            <h3>Email:</h3>
            <p>Youremail@Gmail.Com</p>
          </div>
          <div className="info-group">
            <h3>Skype:</h3>
            <p>@Yourusername</p>
          </div>
          <div className="info-group">
            <h3>Telegram:</h3>
            <p>@Yourusername</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="info-group">
            <h3>Support Services:</h3>
            <p>15389</p>
          </div>
          <div className="info-group">
            <h3>Office:</h3>
            <p>+58 (021)356 587 235</p>
          </div>
          <div className="info-group">
            <h3>Personal:</h3>
            <p>+58 (021)356 587 235</p>
          </div>
        </div>
      </div>
      <div className="map-section">
        {/* Map component or image goes here */}
      </div>
    </div>
  );
};

export default App;