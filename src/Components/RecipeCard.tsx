import "./RecipeCard.css";
import { RxLapTimer } from "react-icons/rx";
import { IoPersonSharp } from "react-icons/io5";
import { PiCookingPotFill } from "react-icons/pi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

interface RecipeCardData {
  item: {
    id: number;
    name: string;
    about: string;
    image: string;
    cuisine: string;
    ingredientSections: Array<{
      name: string;
      items: Array<{
        name: string;
        quantity: string;
        unit: string;
      }>;
    }>;
    nutrients: {
      calories: string;
      protein: string;
      fat: string;
      carbs: string;
      fiber: string;
    };
    preparationSteps: string[];
    cookingSteps: Array<{
      name: string;
      steps: string[];
    }>;
    tools: string[];
    servingSuggestions: string;
    variations: string[];
    storage: {
      shelfLife: string;
      reheatingInstructions: string;
    };
    tags: string[];
    difficulty: string;
    preparationTime: string;
    cookingTime: string;
    servings: number;
    notes: string;
  };
}


function RecipeCard({item}: RecipeCardData) {
    
  return (
    <div>
        <div className="recipeCard">
          <Link to={`/recipes/${item.id}/${item.name}`}>
            <div className="recipeImageContainer">
                <div className="recipeCategory">{item.cuisine}</div>
                <div className="recipePreview">View Recipe <MdOutlineArrowOutward /></div>
                <img src={item.image} alt={item.name} />
            </div>
            <div className="recipeDetailContainer">
                <div className="recipeDetail"><IoPersonSharp />&nbsp;{item.servings} serv</div>
                <div className="recipeDetail"><RxLapTimer />&nbsp;{item.preparationTime} prep</div>
                <div className="recipeDetail"><PiCookingPotFill />&nbsp;{item.cookingTime} cook</div>
            </div>
            <h1>{item.name}</h1>
          </Link>
        </div>
    </div>
  );
}

export default RecipeCard;
