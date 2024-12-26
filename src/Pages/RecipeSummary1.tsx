import "./RecipeSummary1.css";
import { Link } from "react-router-dom";
import { LiaCircle } from "react-icons/lia";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
import allRecipies from "../database/recipes";
import viewMore from "/Images/recipe1.jpg";
import { useState } from "react";


function RecipeSummary1() {

    const { id } = useParams();
    const  recipeSummaryData = allRecipies.find(item => (item.id === Number(id)));

    type RecipeInstructions = {
      [key: string]: string | undefined;
    };

    type RecipeNutrients = {
      [key: string]: string | undefined;
    };
    
    const typeInstructions: RecipeInstructions = recipeSummaryData?.instructions || {};
    const typeNutrients: RecipeNutrients = recipeSummaryData?.nutrients || {};

    const [ingredientDone, setIngredientDone] = useState({});

    const ingredientToggle = (index) => {
      setIngredientDone((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    };

    // setIngredientDone(() => {})

  return (
    <div>
      <div className="recipeSummaryContainer1">
        <div className="recipeSummaryContent1">
            <h1 className="recipeName1">{recipeSummaryData?.name}</h1>

            <div className="recipeSummaryAbout1">
              <div className="recipeSummaryHeroImg1">
                <img src={recipeSummaryData?.recipeHeroImage} alt="" />
              </div>
              <div className="recipeAboutP">
                <p>{recipeSummaryData?.about}</p>
              </div>
            </div>

            <div className="reicpeNutrients">
                <div className="nutrientsHeading">
                  <h2>Nutrients</h2>
                </div>
                {recipeSummaryData?.nutrients && (
                  Object.keys(recipeSummaryData?.nutrients).map((key)=> (
                    <div key={key} className="reicpeNutrientsDetails">
                      <p>{typeNutrients[key]}</p>
                      <h2>{key}</h2>
                    </div>
                  ))
                )}
            </div>

            <h1>Ingredients</h1>
                <div className="ingredinetsTable">
                {recipeSummaryData?.ingredients.map((item, index) => (
                  <div className={`ingredinetsTableRow ${ingredientDone[index] ? "ingredinetsTableRowDone" : ""}`} key={index} 
                  onClick={() => ingredientToggle(index)}>
                    <p className="tableDot">{ingredientDone[index] ? <IoIosCheckmarkCircleOutline /> : <LiaCircle/>}</p>
                    <h2>{item}</h2>
                  </div>
                ))}
                </div>

                <div className="recipeInstructionsContainer1">
                  <h1>Direction :</h1>
                {recipeSummaryData?.instructions && (
                  Object.keys(recipeSummaryData.instructions).map((key) => (
                    <div key={key} className="recipeInstructions1">
                        <p><span>{key}:</span> {typeInstructions[key]}</p>
                      </div>
                    ))
                  )}
                </div>
         
                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/XuttnylxuXY?si=XwsX31TDDp9IO1YG" title={recipeSummaryData?.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <div className="recipeVideoAbout1">
                    <p>Follow for more: <Link to="/">GOODNESS IN BOWL</Link></p>
                </div>
        </div>

        <div className="recipeSummaryContent2">
          <div className="authorAbout">
            <p>About Me</p>
            <div className="avatarImage">
            <img src="https://www.aiscribbles.com/img/variant/large-preview/33200/?v=57dffb" alt="avtar" />
            </div>
            <h1>Hi!  I'm Anita Jailwal</h1>
            <p>Dedicated to crafting vibrant, wholesome bowls that blend simplicity, flavor, and nourishment. Perfect for every meal and moment.</p>
          </div>
          <div className="viewMoreRecipes">
            <h2>View More</h2>
            <div className="sepcificRecipe">
              <div className="viewMoreRecipesImg">
                <img src={viewMore} alt="recipe" />
              </div>
              <div className="specificRecipeAbout">
                  <h2>Poha</h2>
                  <p>4 servings</p>
                  <p>30 min prep</p>
                  <p>45 min cook</p>
              </div>
              <p></p>
            </div>
            <div className="sepcificRecipe">
              <div className="viewMoreRecipesImg">
                <img src={viewMore} alt="recipe" />
              </div>
              <div className="specificRecipeAbout">
                  <h2>Poha</h2>
                  <p>4 servings</p>
                  <p>30 min prep</p>
                  <p>45 min cook</p>
              </div>
              <p></p>
            </div>
            <div className="sepcificRecipe">
              <div className="viewMoreRecipesImg">
                <img src={viewMore} alt="recipe" />
              </div>
              <div className="specificRecipeAbout">
                  <h2>Poha</h2>
                  <p>4 servings</p>
                  <p>30 min prep</p>
                  <p>45 min cook</p>
              </div>
              <p></p>
            </div>
            <div className="sepcificRecipe">
              <div className="viewMoreRecipesImg">
                <img src={viewMore} alt="recipe" />
              </div>
              <div className="specificRecipeAbout">
                  <h2>Poha</h2>
                  <p>4 servings</p>
                  <p>30 min prep</p>
                  <p>45 min cook</p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeSummary1;
