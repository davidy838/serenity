import React from 'react';
import RecipesSection from '../components/recipes-section/RecipesSection';
import { Link } from 'react-router-dom';
import './Recipes.css';

function Reviews() {
  return (
    <>
    <RecipesSection />
    <Link to="/breathing">
        <button className="continueButton">Continue</button>
    </Link>
    </>

  );
}

export default Reviews;