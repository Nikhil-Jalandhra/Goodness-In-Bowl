import "./Recipes.css";
import RecipeCard from "../Components/RecipeCard";
import recipesData from "../database/recipes1.ts";
import { useState } from "react";


function Recipes() {

  const [recipeFilter, setRecipeFilter] = useState("All");
  let finalData = recipesData;

  if (recipeFilter === "All") {
    finalData = recipesData
  }
  else {
    finalData = recipesData.filter((item) => (item.tags.includes(recipeFilter)))
  };


  return (
    <div>
        <div className="recipesContainer">
          <h1 className="recipesPageHeading">😋Tease Your Taste Buds!</h1>
          <div>
            <button onClick={() => setRecipeFilter("All")}>All</button>
            <button onClick={() => setRecipeFilter("Breakfast")}>breakfast</button>
            <button onClick={() => setRecipeFilter("Lunch")}>Lunch</button>
            <button onClick={() => setRecipeFilter("Quick")}>Quick</button>
          </div>
          <div className="recipesCardContainer">
            {finalData.map((item, key) => (
              <RecipeCard item={item} key={key} />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Recipes;
