import React, { useState } from 'react';
import '../style/Projects.css';
import Inspect from '../assets/images/DevTools.jpg';
import VSCode from '../assets/images/VSCode.jfif';
import PyCharm from '../assets/images/PyCharm.png';
import Cmd from '../assets/images/Cmd.png';
import HTML from '../assets/images/HTML.png';




const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Define your projects data. Each project can have a category property.
  const projectsData = [
    { id: 1, category: 'Frontend', details:'sdd', pdfUrl: '', imgUrl:Inspect},
    { id: 2, category: 'Frontend', pdfUrl: '/path/to/project2.pdf', imgUrl:VSCode},
    { id: 3, category: 'Backend', pdfUrl: '/path/to/project3.pdf' ,imgUrl:PyCharm},
    { id: 3, category: 'Backend', pdfUrl: '/path/to/project3.pdf',imgUrl:Cmd},
    { id: 3, category: 'Backend', pdfUrl: '/path/to/project3.pdf' ,imgUrl:HTML},
    { id: 3, category: 'Backend', pdfUrl: '/path/to/project3.pdf' },
    // Add more projects with their respective categories and PDF URLs
  ];

  const filteredProjects = selectedCategory === 'All Categories'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="project-gallery" id='projects'>
      <div className="project-title">
      <h1>Projects</h1>
      <p>
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor. Do Amet
        Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
      </p>
      </div>

      <div className="categories">
        <a onClick={() => setSelectedCategory('All Categories')}><span className={`category ${selectedCategory === 'All Categories' && 'active'}`}>All Categories</span></a>
        <a onClick={() => setSelectedCategory('Frontend')}><span className={`category ${selectedCategory === 'Frontend' && 'active'}`}>Frontend</span></a>
        <a onClick={() => setSelectedCategory('Backend')}><span className={`category ${selectedCategory === 'Backend' && 'active'}`}>Backend</span></a>
        <a onClick={() => setSelectedCategory('Database')}><span className={`category ${selectedCategory === 'Database' && 'active'}`}>Database</span></a>
       
      </div>

      <div className="project-grid">
        {filteredProjects.map(project => (
          <div className="project-item" key={project.id}>
            <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer"><img src={project.imgUrl} alt={project.name} />
            {project.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
