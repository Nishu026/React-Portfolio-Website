import React from 'react'
import '../style/Education.css';

const Education = () => {
  return (
    <div className="education-container" id='education'>
      <div className="education-title">
        <h1>Education</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid temporibus delectus iure vitae odio illo eligendi eaque architecto blanditiis!</p>
      </div>
      <table className="education-table">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Field of Study</th>
            <th>Year of Graduation</th>
            <th>Percentage/CGPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MSC-IT</td>
            <td>University department of Information Technology</td>
            <td>Science</td>
            <td>2023</td>
            <td>9.40</td>
          </tr>
          <tr>
            <td>BSC-IT</td>
            <td>Sonopant Dandekar Shikshan Mandali’s, College Palghar</td>
            <td>Science</td>
            <td>2021</td>
            <td>9.40</td>
          </tr>
          <tr>
            <td>HSC</td>
            <td>Sonopant Dandekar Shikshan Mandali’s, College Palghar</td>
            <td>Science</td>
            <td>2018</td>
            <td>65.23%</td>
          </tr>

          <tr>
            <td>SSC</td>
            <td>Sonopant Dandekar Shikshan Mandali’s, College Palghar</td>
            <td>Science</td>
            <td>2016</td>
            <td>91.60%</td>
          </tr>
        </tbody>
      </table>

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
    </div>
  )
}

export default Education