import React from 'react'
import '../style/Recommendation.css';
import ProfilePhoto from '../assets/images/My_Profile_Photo-removebg-preview.png';
const Recommendation = () => {
  return (
    <div className='recommendation-container'>
      <h1>Recommendations</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis incidunt voluptates assumenda quibusdam libero?</p>
      <div className='cards'>
        <div className="card-items">
          <div className='rating'>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
          <div className='profile'>
            <h3>Great Quality!</h3>
          </div>
          <div className="feedback">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro non mollitia, deserunt saepe cupiditate corrupti debitis culpa omnis velit quod tempora </p>
          </div>
        </div>

        <div className="card-items">
        <div className='rating'>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
          <div className='profile'>
            <h3>Great Quality!</h3>
          </div>
          <div className="feedback">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro non mollitia, deserunt saepe cupiditate corrupti debitis culpa omnis velit quod tempora </p>
          </div>
        </div>

        <div className="card-items">
        <div className='rating'>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
          <div className='profile'>
            <h3>Great Quality!</h3>
          </div>
          <div className="feedback">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro non mollitia, deserunt saepe cupiditate corrupti debitis culpa omnis velit quod tempora </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendation;
