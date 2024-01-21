import React from 'react';
import './RecipesSection.css';
import ReviewSlider from '../recipe-slider/RecipeSlider';

function ReviewsSection() {
  return (
    <section className="reviews-section-standalone">
      <div className="reviews-section-container">
        <h1 className="reviews-title">Recipes</h1>
        <ReviewSlider />
      </div>
    </section>
  );
}

export default ReviewsSection;