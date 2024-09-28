import "./RecipeCard.css";
import { RxLapTimer } from "react-icons/rx";
import { IoPersonSharp } from "react-icons/io5";
import { PiCookingPotFill } from "react-icons/pi";
import { MdOutlineArrowOutward } from "react-icons/md";

function RecipeCard({item}) {
    
  return (
    <div>
        <div className="recipeCard">
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
        </div>
    </div>
  );
}

export default RecipeCard;
