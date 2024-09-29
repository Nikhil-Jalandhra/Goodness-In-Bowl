import "./Recipes.css";
import RecipeCard from "../Components/RecipeCard";
import recipesData from "../database/recipes.ts";

function Recipes() {
  return (
    <div>
        <div className="recipesContainer">
          <h1 className="recipesPageHeading">😋Tease Your Taste Buds!</h1>
          <div className="recipesCardContainer">
            {recipesData.map((item, key) => (
              <RecipeCard item={item} key={key} />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Recipes;
