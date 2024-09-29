import "./RecipeSummary.css";
import { Link } from "react-router-dom";
import { RxLapTimer } from "react-icons/rx";
import { IoPersonSharp } from "react-icons/io5";
import { PiCookingPotFill } from "react-icons/pi";
import { useParams } from "react-router-dom";
import allRecipies from "../database/recipes";


function RecipeSummary() {

    const { id } = useParams();

    const  recipeSummaryData = allRecipies.find(item => (item.id === Number(id)));
    

  return (
    <div>
      <div className="recipeSummaryContainer">
        <div className="recipeSummaryContent">
            <h1 className="recipeName">{recipeSummaryData?.name}</h1>
         <div className="recipeSummaryImageAboutContainer">
            <img src={recipeSummaryData?.recipeHeroImage} alt={recipeSummaryData?.name} />
            <div className="recipeSummaryAboutContainer">
            <h1 className="recipeAboutDetailHeading">About</h1>
            <p>{recipeSummaryData?.about}</p>
            <div className="recipeOfficialDetails">
                <h1 className="recipeNutIng">Nutrients:</h1>
                <ul>
                    {recipeSummaryData?.nutrients?.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
            </div>
            {/* ------------------------------------- */}
            <div className="recipeOfficialDetails">
            <h1 className="recipeAboutDetailHeading">Details</h1>
                <h1 className="recipeNutIng">Ingredients:</h1>
                <ul>
                    {recipeSummaryData?.ingredients.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
                <div className="recipeButtons">
                    <p><IoPersonSharp />&nbsp;{recipeSummaryData?.servings} servings</p>
                    <p><RxLapTimer />&nbsp;{recipeSummaryData?.prepTime} prep</p>
                    <p><PiCookingPotFill />&nbsp;{recipeSummaryData?.cookTime} cook</p>
                </div>
            </div>
            <img src={recipeSummaryData?.recipeHeroImage} alt={recipeSummaryData?.name} />
         </div>
         <iframe width="90%" height="500px" src="https://www.youtube.com/embed/XuttnylxuXY?si=XwsX31TDDp9IO1YG" title={recipeSummaryData?.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         <div className="recipeVideoAbout">
            <p>Follow for more: <Link to="/">GOODNESS IN BOWL</Link></p>
         </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeSummary;
