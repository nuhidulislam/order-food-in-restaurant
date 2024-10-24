import { list } from "postcss";
import { useEffect } from "react";
import { useState } from "react";


const RecipesCards = ({addRecipeToQueue}) => {
    const [recipes, setRecipes]= useState([])

    useEffect(()=>{
        fetch('/public/recipes.json')
        .then(res=>res.json())
        .then(data => setRecipes(data))

    }, [])

   
    return (
        <div className=" md:w-2/3 "> 
        <div className="grid gird-cols-1 lg:grid-cols-2 gap-6">

        {
            recipes.map(recipe => 
                <div key={recipe.recipe_id} className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={recipe.recipe_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipe.recipe_name}</h2>
    <p>{recipe.short_description}</p>
    <h3>Ingradients:{recipe.ingredients.length}</h3>
    <ul className="">{
        recipe.ingredients.map((item, index)=> <li className="list-disc" key={index}>{item}</li>)
}</ul>

<div className="flex gap-4">
    <div className="flex gap-2 items-center ">
    <i className="fa-regular fa-clock"></i>
    <p>{recipe.preparing_time} minutes</p>
    </div>
    <div className="flex gap-2 items-center ">
    <i className="fa-solid fa-fire-flame-curved"></i>
    <p>{recipe.calories} calorie</p>
    </div>
</div>
    <div className="card-actions">
      <button onClick={()=> addRecipeToQueue(recipe)} className="btn bg-green-400 rounded-full text-xl font-semibold ">Want to Cook</button>
    </div>
  </div>
</div>

            )}
        </div>
            
            
        </div>
    );
};

export default RecipesCards;