"use client";

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const cleanIngredient = (ingredient) => {
    return ingredient
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
      .replace(/[,0-9]/g, "")
      .trim()
      .split(" ")
      .slice(0, 2) 
      .join(" ");
  };

  const fetchMealIdeas = async (ingredient) => {
    try {
      const cleanedIngredient = cleanIngredient(ingredient);
      if (!cleanedIngredient) return; 

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanedIngredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  };

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then(setMeals);
    }
  }, [ingredient]);

  return (
    <div className="p-4 text-white">
      <ul className="list-disc pl-6">
        {
          ingredient === "" ? (
            <p>No items selected</p>
          ) : meals.length > 0 ? (
            <div>
              
              <h2 className="text-xl font-bold mb-2">Meal Ideas for "{ingredient}"</h2>
              {meals.map((meal) => (
                <li key={meal.idMeal} className="text-lg">
                  {meal.strMeal}
                </li>
              ))}
            </div>
          ) : (
            <li>No meal ideas available for "{ingredient}".</li>
          )
        }
      </ul>
    </div>
  );
  
}
export default MealIdeas;


