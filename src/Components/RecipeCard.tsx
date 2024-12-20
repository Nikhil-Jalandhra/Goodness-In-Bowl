import "./RecipeCard.css";
import { RxLapTimer } from "react-icons/rx";
import { IoPersonSharp } from "react-icons/io5";
import { PiCookingPotFill } from "react-icons/pi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

interface recipeCardData {
  item: {
      id: number,
      name: string,
      about: string,
      ingredients: string[],
      recipeVideoLink: string,
      recipeHeroImage: string,
      recipeHeroImage2: string,
      servings: number,
      prepTime: string,
      cookTime: string,
      category: string,
      nutrients: object
  }
}

function RecipeCard({item}: recipeCardData) {
    
  return (
    <div>
        <div className="recipeCard">
          <Link to={`/recipes/${item.id}/${item.name}`}>
            <div className="recipeImageContainer">
                <div className="recipeCategory">{item.category}</div>
                <div className="recipePreview">View Recipe <MdOutlineArrowOutward /></div>
                <img src={item.recipeHeroImage} alt={item.name} />
            </div>
            <div className="recipeDetailContainer">
                <div className="recipeDetail"><IoPersonSharp />&nbsp;{item.servings} servings</div>
                <div className="recipeDetail"><RxLapTimer />&nbsp;{item.prepTime} prep</div>
                <div className="recipeDetail"><PiCookingPotFill />&nbsp;{item.cookTime} cook</div>
            </div>
            <h1>{item.name}</h1>
          </Link>
        </div>
    </div>
  );
}

export default RecipeCard;
