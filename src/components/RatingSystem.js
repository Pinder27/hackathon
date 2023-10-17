import React, { useState } from 'react';
import { MDBContainer, MDBRating } from 'mdbreact';
import { FaStar } from 'react-icons/fa';

const RatingSystem = () => {
  const categories = [
    { name: 'Idea', rating: 0 },
    { name: 'Design', rating: 0 },
    { name: 'Implementation', rating: 0 },
    { name: 'Presentation', rating: 0 },
  ];

  const [totalRating, setTotalRating] = useState(0);

  const customIcons = {
    1: <FaStar />,
    2: <FaStar />,
    3: <FaStar />,
    4: <FaStar />,
    5: <FaStar />,
  };

  const handleCategoryRatingChange = (value, categoryIndex) => {
    categories[categoryIndex].rating = value;
    setTotalRating(calculateTotalRating());
  };

  const calculateTotalRating = () => {
    return categories.reduce((total, category) => total + category.rating, 0);
  };

  return (
    <MDBContainer>
      <h1>Project Evaluation</h1>
      {categories.map((category, index) => (
        <div key={index}>
          <h2>{category.name}</h2>
          <MDBRating
            iconRegular={customIcons}
            iconHover={<FaStar />}
            iconDimension="30px"
            labelHover="Thanks!"
            labelInactive={`Rating: ${category.rating}`}
            labelActive={`Rating: ${category.rating}`}
            onClick={(value) => handleCategoryRatingChange(value, index)}
            className={`category-rating category-${index}`}
            feedback
          />
        </div>
      ))}
      <h2>Total Rating</h2>
      <MDBRating
        iconRegular={customIcons}
        iconHover={<FaStar />}
        iconDimension="30px"
        labelHover="Thanks!"
        labelInactive={`Total Rating: ${totalRating}`}
        labelActive={`Total Rating: ${totalRating}`}
        feedback
      />
    </MDBContainer>
  );
};

export default RatingSystem;
