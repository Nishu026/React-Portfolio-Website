import React, { useState } from 'react';
import '../style/Recommendation.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recommendations = [
    {
      name: 'James Gouse',
      profession: 'Graphic Designer',
      rating: 5,
      title: 'Great Quality!',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....'
    },
    {
      name: 'Tiana Phillips',
      profession: 'Photographer',
      rating: 5,
      title: 'Amazing Work!',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....'
    },
    {
      name: 'Talan Westervelt',
      profession: 'Business Man',
      rating: 4,
      title: 'Great Quality!',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....'
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? recommendations.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === recommendations.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="carousel">
      <h2>Recommendations</h2>
      <p>Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.</p>
      <p>Lorem Ipsum</p>

      <div className="carousel-slide">
        <div className="slide">
          <div className="rating">
            {Array(recommendations[currentSlide].rating).fill().map((_, i) => (
              <span key={i} className="star">&#9733;</span>
            ))}
          </div>
          <h3>{recommendations[currentSlide].title}</h3>
          <p>{recommendations[currentSlide].description}</p>
          <div className="profile">
            <img src={`https://via.placeholder.com/50x50?text=${recommendations[currentSlide].name.charAt(0)}`} alt={recommendations[currentSlide].name} />
            <div>
              <h4>{recommendations[currentSlide].name}</h4>
              <p>{recommendations[currentSlide].profession}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={handlePrevSlide}>Prev</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;