import "./Recipes.css";
import RecipeCard from "../Components/RecipeCard";
import recipesData from "../database/recipes.ts";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import FilterButton from "../Components/FilterButton.tsx";
import filterData from "../database/filterData.ts";


function Recipes() {

  const {filter} = useParams();
  const [finalData, setFinalData] = useState<typeof recipesData>([]);
  
  useEffect(() => {
    const filterData = filter ? recipesData.filter((item) => (item.tags.includes(filter))) : recipesData;
    
    setFinalData(filterData);
  }, [filter]);

  return (
    <div>
        <div className="recipesContainer">

          <div className="displayRecipeFilter">
            {filterData.map((item, index) => (
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
