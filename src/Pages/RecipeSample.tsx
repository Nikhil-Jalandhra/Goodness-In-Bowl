import recipes from "../database/recipes1";

function RecipeSample() {

    const  recipeData = recipes.find(item => (item.id === Number(1)));

  return (
    <div>
        <p>{recipeData?.heading}</p>
        <p>{recipeData?.about}</p>
        <p>{recipeData?.cuisine}</p>
        <div>{recipeData?.ingredientSections.map((item) => (
            <div >
                <p>{item.name}</p>
                <div>
                    <p>{item.items.map((item) => (
                        <div style={{display: "flex"}}>
                            <p>{item.name}, </p>
                            <p>{item.quantity}, </p>
                            <p>{item.unit}</p>
                        </div>
                    ))}</p>
                </div>
            </div>
        ))}</div>
        <div style={{display: "flex"}}>{Object.keys(recipeData?.nutrients || {}).map((item, index) => (
            <div key={index}>
                <p>
                    {item.charAt(0).toUpperCase()} {recipeData?.nutrients[item]}
                </p>
            </div>
        ))}</div>
        <h2>Prep</h2>
        <div>{recipeData?.preparationSteps.map((item) => (
            <p>{item}</p>
        ))}</div>
        <h1>cook</h1>
        <div>{recipeData?.cookingSteps.map((item) => (
            <div>
                <h2>{item.name}</h2>
                <div>{item.steps.map((items,index) => (
                    <p>{index+1}. {items}</p>
                ))}</div>
                <p></p>
            </div>
        ))}</div>
        <div>{recipeData?.tools.map((item) => (
            <p>{item}</p>
        ))}</div>
    </div>
  );
}

export default RecipeSample;
