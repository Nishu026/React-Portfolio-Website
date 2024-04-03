import React, { useState } from 'react';
import '../style/Projects.css';
import Inspect from '../assets/images/DevTools.jpg';
import VSCode from '../assets/images/VSCode.jfif';
import PyCharm from '../assets/images/PyCharm.png';
import Cmd from '../assets/images/Cmd.png';
import HTML from '../assets/images/HTML.png';
import Css from '../assets/images/CSS.jfif';
import JS from '../assets/images/JS.jfif';
import Nodejs from '../assets/images/Nodejs.png';
import Reactjs from '../assets/images/React.png';
import Python from '../assets/images/Python.jfif';
import Django from '../assets/images/django.jpg';
import Flask from '../assets/images/Flask.png';
import MongoDB from '../assets/images/mongodb.png';

import P1 from '../assets/pdf/P1-Inspect.pdf';
import P2 from '../assets/pdf/P2-VSCode.pdf';
import P3 from '../assets/pdf/P3-PyCharm.pdf';
import P4 from '../assets/pdf/P4-CMD.pdf';
import P5 from '../assets/pdf/P5-HTML.pdf';
import P6 from '../assets/pdf/P6-CSS.pdf';
import P7 from '../assets/pdf/P7-JS.pdf';
import P8 from '../assets/pdf/P8-Node.pdf';
import P9 from '../assets/pdf/P9-React.pdf';
import P10 from '../assets/pdf/P10-Python.pdf';
import P11 from '../assets/pdf/P11-Django.pdf';
import P12 from '../assets/pdf/P12-Flask.pdf';
import P13 from '../assets/pdf/P13-MongoDB.pdf';


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Define your projects data. Each project can have a category property.
  const projectsData = [
    { id: 1, category: 'Others', pdfUrl: P1, imgUrl:Inspect},
    { id: 2, category: 'Others', pdfUrl: P2, imgUrl:VSCode},
    { id: 3, category: 'Others', pdfUrl: P3 ,imgUrl:PyCharm},
    { id: 4, category: 'Others', pdfUrl: P4, imgUrl:Cmd},
    { id: 5, category: 'Frontend', pdfUrl: P5 ,imgUrl:HTML},
    { id: 6, category: 'Frontend', pdfUrl: P6, imgUrl:Css },
    { id: 7, category: 'Frontend', pdfUrl: P7, imgUrl:JS },
    { id: 8, category: 'Backend', pdfUrl: P8, imgUrl:Nodejs },
    { id: 9, category: 'Frontend', pdfUrl: P9, imgUrl:Reactjs },
    { id: 10, category: 'Backend', pdfUrl: P10, imgUrl:Python },
    { id: 11, category: 'Backend', pdfUrl: P11, imgUrl:Django},
    { id: 12, category: 'Backend', pdfUrl: P12, imgUrl:Flask},
    { id: 13, category: 'Database', pdfUrl: P13, imgUrl:MongoDB},

    // Add more projects with their respective categories and PDF URLs
  ];

  const filteredProjects = selectedCategory === 'All Categories'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section>
    <div className="project-gallery" id='projects'>
      <div className="project-title">
      <h1>Projects</h1>
      <p>
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor. Do Amet
        Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
      </p>
      </div>

      <div className="categories">
        <a onClick={() => setSelectedCategory('All Categories')}><span className={`category ${selectedCategory === 'All Categories' && 'active'}`}><b>All Categories</b></span></a>
        <a onClick={() => setSelectedCategory('Frontend')}><span className={`category ${selectedCategory === 'Frontend' && 'active'}`}><b>Frontend</b></span></a>
        <a onClick={() => setSelectedCategory('Backend')}><span className={`category ${selectedCategory === 'Backend' && 'active'}`}><b>Backend</b></span></a>
        <a onClick={() => setSelectedCategory('Database')}><span className={`category ${selectedCategory === 'Database' && 'active'}`}><b>Database</b></span></a>
        <a onClick={() => setSelectedCategory('Others')}><span className={`category ${selectedCategory === 'Ide' && 'active'}`}><b>Others</b></span></a>
       
      </div>

      <div className="project-grid">
        {filteredProjects.map(project => (
          <div className="project-item" key={project.id}>
          <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer"><img src={project.imgUrl} alt={project.name} />{project.name}</a>
        </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;
