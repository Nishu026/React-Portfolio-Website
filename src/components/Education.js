import React from 'react'
import '../style/Education.css';
import { Divider } from '@mui/material';

const Education = () => {
  return (
    <section>
      <div className="education-container" id='education'>
        <div className="education-title">
          <h1>Education Details</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid temporibus delectus iure vitae odio illo eligendi eaque architecto blanditiis!</p>
        </div>

        <div className="education-details">
          <div className="education-details-card">
            <div className='university'>
              <span><h3>University of Mumbai</h3></span>
              <span>Student</span>
              <span className='duration'>jan 2016- dec 2013</span>
            </div> 

            <div className='certificates'>
              <span><h3>Certification of Web Training</h3></span>
              <span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt adipisci aspernatur dignissimos voluptates veniam, nam impedit esse, in autem vero voluptatibus quibusdam vitae delectus ullam officia rem sint explicabo soluta! Optio, impedit perferendis?</p></span>
            </div>
          </div>

        <Divider/>

          <div className="education-details-card">
            <div className='university'>
              <span><h3>Programming Course</h3></span>
              <span>Student</span>
              <span className='duration'> jan 2016- dec 2013 </span>
            </div>

            <div className='certificates'>
              <span><h3>Certification of Web Training</h3></span>
              <span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt adipisci aspernatur dignissimos voluptates veniam, nam impedit esse, in autem vero voluptatibus quibusdam vitae delectus ullam officia rem sint explicabo soluta! Optio, impedit perferendis?</p></span>
        
            </div>
          </div>

          <Divider/>

          <div className="education-details-card">
            <div className='university'>
              <span><h3>Web Developer Courses</h3></span>
              <span>Student</span>
              <span className='duration'> jan 2016- dec 2013 </span>
            </div>

            <div className='certificates'>
              <span><h3>Certification of Web Training</h3></span>
              <span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt adipisci aspernatur dignissimos voluptates veniam, nam impedit esse, in autem vero voluptatibus quibusdam vitae delectus ullam officia rem sint explicabo soluta! Optio, impedit perferendis?</p></span>
              
            </div>
          </div>

          </div>



        </div>


        {/* <div className="education-details">
        <div className="education-details-card">
          <span className='education-title'><h3>Education Details</h3></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid temporibus delectus iure vitae odio illo eligendi eaque architecto blanditiis!</p>
        </div>

        <div className="education-details-card">
          <span className='education-title'><h3>Education Details</h3></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid temporibus delectus iure vitae odio illo eligendi eaque architecto blanditiis!</p>
        </div>

        <div className="education-details-card">
          <span className='education-title'><h3>Education Details</h3></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid temporibus delectus iure vitae odio illo eligendi eaque architecto blanditiis!</p>
        </div>

        <div className="education-details-card">
          <span className='education-title'><h3>Education Details</h3></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid temporibus delectus iure vitae odio illo eligendi eaque architecto blanditiis!</p>
        </div>
      </div> */}
    </section>
  )
}

export default Education;