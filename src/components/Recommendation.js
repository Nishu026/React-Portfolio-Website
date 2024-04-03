import React, { useState } from 'react';
import '../style/Recommendation.css';

const ImageSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const recommendations = [
    {
      name: 'James Gouse',
      profession: 'Graphic Designer',
      rating: 5,
      title: 'Great Quality!',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....',
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Tiana Phillips',
      profession: 'Photographer',
      rating: 5,
      title: 'Amazing Work!',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....',
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Talan Westervelt',
      profession: 'Business Man',
      rating: 4,
      title: 'Great Quality!',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....',
      imgUrl: 'https://via.placeholder.com/150',
    },
    // Add more recommendations here
  ];

  const handlePrevSlide = () => {
    setCurrentSlideIndex(currentSlideIndex === 0 ? 0 : currentSlideIndex - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex(currentSlideIndex === Math.floor(recommendations.length / 3) ? currentSlideIndex : currentSlideIndex + 1);
  };

  const renderSlides = () => {
    const slides = [];
    for (let i = 0; i < recommendations.length; i += 3) {
      const slide = (
        <div key={i} className="slider">
          {recommendations.slice(i, i + 3).map((recommendation, index) => (
            <div key={index} className="slider-card">
              <div className="rating">
                {Array(recommendation.rating).fill().map((_, j) => (
                  <span key={j} className="star">&#9733;</span>
                ))}
              </div>
              <h3>{recommendation.title}</h3>
              <p>{recommendation.description}</p>
              <div className="profile">
                <img src={recommendation.imgUrl} alt={recommendation.name} />
                <div>
                  <h4>{recommendation.name}</h4>
                  <p>{recommendation.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
      slides.push(slide);
    }
    return slides;
  };

  return (
    <div className="slider-container">
      <div className="slider-title">
      <h1>Recommendations</h1>
      <p>Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor. Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum</p>
      </div>
      {renderSlides()[currentSlideIndex]}
      <div className="slider-controls">
        <button onClick={handlePrevSlide} disabled={currentSlideIndex === 0}>Prev</button>
        <button onClick={handleNextSlide} disabled={currentSlideIndex === Math.floor(recommendations.length / 3)}>Next</button>
      </div>
    </div>
    
  );
};

export default ImageSlider;