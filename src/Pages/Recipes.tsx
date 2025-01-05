import "./Recipes.css";
import RecipeCard from "../Components/RecipeCard";
import recipesData from "../database/recipes.ts";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import FilterButton from "../Components/FilterButton.tsx";


function Recipes() {

  const {filter} = useParams();
  const [finalData, setFinalData] = useState(null);
  
  useEffect(() => {
    const filterData = filter ? recipesData.filter((item) => (item.tags.includes(filter))) : recipesData;
    
    setFinalData(filterData);
  }, [filter]);
  
  const FilterButtonArray = [
    {
      name: "All",
      link: "/recipes"
    },
    {
      name: "Breakfast",
      link: "/recipes/Breakfast"
    },
    {
      name: "Lunch",
      link: "/recipes/Lunch"
    },
    {
      name: "Quick",
      link: "/recipes/Quick"
    },
  ]


  return (
    <div>
        <div className="recipesContainer">

          <div className="displayRecipeFilter">
            {FilterButtonArray.map((item, index) => (
              <FilterButton key={index} item={item}/>
            ))}
          </div>

          <div className="recipesCardContainer">
            {!finalData ? <p></p> : finalData.map((item, key) => (
              <RecipeCard item={item} key={key} />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Recipes;
